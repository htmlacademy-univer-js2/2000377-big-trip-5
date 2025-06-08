import { render, remove } from '../framework/render.js';
import TripInfo from '../view/trip-info-view.js';
import SortView from '../view/sort-view.js';
import EventList from '../view/event-list-view.js';
import ListMessageView from '../view/empty-list-message-view.js';
import { generateSort } from '../filter-sort-data/sort-data.js';
import RoutePointPresenter from './trip-event-presenter.js';
import { sortTripEvents, getTripInfo } from '../utils.js';
import { RenderPosition } from '../framework/render.js';
import { SortType, UpdateType, UserAction, EmptyListMessage, FilterType } from '../const.js';
import { filter } from '../filter-sort-data/filter-data.js';
import NewRoutePointPresenter from './new-route-point-presenter.js';
import LoadView from '../view/load-view.js';
import ErrorView from '../view/error-view.js';

export default class TripPresenter {
  #eventsListContainer = new EventList();
  #tripEventsModel = null;
  #tripEventsPresenter = new Map();
  #tripEvents = null;
  #sortedRoutePoints = null;
  #currentSortType = SortType.DAY;
  #filterModel = null;
  #sortComponent = null;
  #listMessageComponent = null;
  #tripInfoComponent = null;
  #newRoutePointPresenter = null;
  #newPointButtonComponent = null;
  #isLoading = true;
  #loadComponent = null;
  #errorComponent = null;
  #filterPresenter = null;
  #destinations = null;
  #offersByType = null;

  constructor(tripEventsModel, filterModel, newPointButtonComponent, filterPresenter) {
    this.#tripEventsModel = tripEventsModel;
    this.#filterModel = filterModel;
    this.#newPointButtonComponent = newPointButtonComponent;
    this.#filterPresenter = filterPresenter;

    this.tripInfoContainer = document.querySelector('.trip-main');
    this.filterContainer = document.querySelector('.trip-controls__filters');
    this.eventsContainer = document.querySelector('.trip-events');

    this.#tripEventsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  init() {
    this.#tripEvents = this.#getFilteredPoints();

    if (this.#isLoading) {
      this.#renderLoadingComponent();
      return;
    }

    if (!this.#tripEvents.length) {
      this.#renderEmptyList();
      return;
    }

    this.#renderRoutePointsList(this.#tripEvents);
  }

  #onNewPointButtonClick = () => {
    this.#onModeChange();
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);

    this.#removeEmptyMessage();

    this.#newRoutePointPresenter.init();
    this.#newPointButtonComponent.disableButton();
  };

  #isNewPointFormOpen() {
    return this.#newRoutePointPresenter.isFormOpen();
  }

  #onNewPointFormClose = () => {
    if (this.#newPointButtonComponent) {
      this.#newPointButtonComponent.enableButton();
    }
    if (!this.#tripEvents.length) {
      this.#renderEmptyList();
    }
  };

  #getFilteredPoints() {
    const filterType = this.#filterModel.filter;
    const points = this.#tripEventsModel.points.filter(this.#isValidPoint);
    return filter[filterType](points);
  }

  #renderTripInfo = () => {
    const tripInfoData = getTripInfo(this.#tripEventsModel.points, this.#tripEventsModel.destinations, this.#tripEventsModel.offers);

    if (this.#tripInfoComponent) {
      remove(this.#tripInfoComponent);
    }

    this.#tripInfoComponent = new TripInfo(tripInfoData);
    render(this.#tripInfoComponent, this.tripInfoContainer, RenderPosition.AFTERBEGIN);
  };

  #renderSort(tripEvents) {
    const sort = generateSort(tripEvents);
    this.#sortComponent = new SortView(sort, this.#onSortTypeChange);
    render(this.#sortComponent, this.eventsContainer, RenderPosition.AFTERBEGIN);
  }

  #clearSort() {
    if (this.#sortComponent) {
      this.#sortComponent.element.remove();
      this.#sortComponent = null;
    }
  }

  #onSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#sortedRoutePoints = sortTripEvents(this.#tripEvents, this.#currentSortType);
    this.#clearRoutePointsList();
    this.#renderRoutePointsList(this.#sortedRoutePoints);
  };

  #clearRoutePointsList(resetSortType = false) {
    this.#tripEventsPresenter.forEach((presenter) => presenter.destroy());
    this.#tripEventsPresenter.clear();
    this.#removeLoadingComponent();
    this.#removeErrorComponent();

    this.#removeEmptyMessage();

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
      this.#clearSort();
      this.#renderSort(this.#tripEvents);
    }
  }

  #renderLoadingComponent() {
    this.#loadComponent = new LoadView();
    render(this.#loadComponent, this.eventsContainer);
  }

  #renderErrorComponent() {
    this.#errorComponent = new ErrorView();
    render(this.#errorComponent, this.eventsContainer);
  }

  #renderEmptyList() {
    const filterType = this.#filterModel.filter;
    const message = EmptyListMessage[filterType] || EmptyListMessage.EVERYTHING;
    this.#listMessageComponent = new ListMessageView(message);
    render(this.#listMessageComponent, this.#eventsListContainer.element);
  }

  #removeEmptyMessage() {
    if (this.#listMessageComponent) {
      remove(this.#listMessageComponent);
      this.#listMessageComponent = null;
    }
  }

  #removeLoadingComponent() {
    this.#isLoading = false;
    remove(this.#loadComponent);
  }

  #removeErrorComponent() {
    remove(this.#errorComponent);
  }

  #isValidPoint = (point) => (
    point.id !== '' &&
    point.base_price > 0 &&
    point.date_from !== null &&
    point.date_to !== null &&
    point.type.trim() !== ''
  );

  #renderRoutePointsList(tripEvents) {
    tripEvents.forEach((tripEvent) => {
      this.#renderRoutePoint(tripEvent);
    });
  }

  #onModeChange = () => {
    this.#tripEventsPresenter.forEach((point) => point.resetPointMode());
  };

  #renderRoutePoint(tripEvent) {
    const tripEventPresenter = new RoutePointPresenter(
      this.#eventsListContainer.element,
      this.#onDataChange,
      this.#onModeChange,
      () => this.#isNewPointFormOpen(),
      () => this.#newRoutePointPresenter.destroy(),
      this.#tripEventsModel.destinations,
      this.#tripEventsModel.offers
    );

    tripEventPresenter.init(tripEvent);
    this.#tripEventsPresenter.set(tripEvent.id, tripEventPresenter);
  }

  #renderContent() {
    render(this.#eventsListContainer, this.eventsContainer);

    if (!this.#tripEvents.length) {
      this.#renderEmptyList();
    } else {
      this.#renderRoutePointsList(this.#tripEvents);
    }
  }

  #handleModelEvent = (updateType) => {
    this.#tripEvents = this.#getFilteredPoints();

    switch (updateType) {
      case UpdateType.PATCH:
        this.#sortedRoutePoints = sortTripEvents(this.#tripEvents, this.#currentSortType);
        this.#clearRoutePointsList();
        this.#renderRoutePointsList(this.#sortedRoutePoints);
        this.#renderTripInfo();
        break;
      case UpdateType.MINOR:
        this.#clearRoutePointsList();
        this.#renderTripInfo();
        this.#renderContent();
        if (!this.#tripEvents.length) {
          this.#clearSort();
          this.#renderSort(this.#tripEvents);
        }
        break;
      case UpdateType.MAJOR:
        this.#clearRoutePointsList(true);
        this.#renderTripInfo();
        this.#renderContent();
        break;
      case UpdateType.INIT:
        this.#destinations = this.#tripEventsModel.destinations;
        this.#offersByType = this.#tripEventsModel.offers;

        this.#newRoutePointPresenter = new NewRoutePointPresenter(
          this.#eventsListContainer.element,
          this.#destinations,
          this.#offersByType,
          this.#onDataChange,
          this.#onNewPointFormClose
        );

        this.#removeLoadingComponent();
        this.#renderSort(this.#tripEvents);
        this.#renderTripInfo();
        this.#renderContent();
        this.#filterPresenter.init();
        this.#newPointButtonComponent.init(this.#onNewPointButtonClick);
        break;
      case UpdateType.ERROR:
        this.#removeLoadingComponent();
        this.#renderErrorComponent();
    }
  };

  #onDataChange = async (userAction, updateType, update) => {
    switch (userAction) {
      case UserAction.UPDATE_POINT:
        await this.#tripEventsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        await this.#tripEventsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        await this.#tripEventsModel.deletePoint(updateType, update);
        break;
    }
  };
}
