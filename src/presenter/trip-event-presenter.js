import { render, replace } from '../framework/render.js';
import RoutePointView from '../view/trip-event-view.js';
import CreateEditEventView from '../view/create-edit-event-view.js';
import { isEscapeKey } from '../utils.js';
import { Mode, UserAction, UpdateType, FormType } from '../const.js';

export default class RoutePointPresenter {
  #eventsListContainer = null;
  #tripEvent = null;
  #point = null;
  #editPoint = null;
  #onDataChange = null;
  #onModeChange = null;
  #mode = Mode.DEFAULT;
  #isNewPointFormOpen = null;
  #closeNewPointForm = null;
  #destinations = null;
  #offers = null;

  constructor(eventsListContainer, onDataChange, onModeChange, isNewPointFormOpen, closeNewPointForm, destinations, offers) {
    this.#eventsListContainer = eventsListContainer;
    this.#onDataChange = onDataChange;
    this.#onModeChange = onModeChange;
    this.#isNewPointFormOpen = isNewPointFormOpen;
    this.#closeNewPointForm = closeNewPointForm;
    this.#destinations = destinations;
    this.#offers = offers;
  }

  init(tripEvent) {
    this.#tripEvent = tripEvent;
    this.#renderRoutePoint();
  }

  destroy() {
    if (this.#point) {
      this.#point.element.remove();
      this.#point = null;
    }
    if (this.#editPoint) {
      this.#editPoint.element.remove();
      this.#editPoint = null;
    }
  }

  #renderRoutePoint() {
    this.destroy();

    this.#point = new RoutePointView(
      this.#tripEvent,
      this.#destinations,
      this.#offers,
      this.#onOpenEditButtonClick,
      this.#onFavoriteClick.bind(this)
    );

    render(this.#point, this.#eventsListContainer);
  }

  #onFavoriteClick = async (tripEvent) => {
    // eslint-disable-next-line camelcase
    tripEvent.is_favorite = !tripEvent.is_favorite;
    await this.#onDataChange(UserAction.UPDATE_POINT, UpdateType.PATCH, tripEvent);
  };

  #onEscKeyDown = (evt) => {
    if (isEscapeKey(evt)) {
      this.#replaceEditPointToPoint();
      document.removeEventListener('keydown', this.#onEscKeyDown);
    }
  };

  #onOpenEditButtonClick = () => {
    if (this.#isNewPointFormOpen()) {
      this.#closeNewPointForm();
    }

    this.#replacePointToEditPoint();
    document.addEventListener('keydown', this.#onEscKeyDown);
  };

  #onCloseEditButtonClick = () => {
    this.#replaceEditPointToPoint();
    document.removeEventListener('keydown', this.#onEscKeyDown);
  };

  #isElementInDOM(element) {
    return element !== null && element.element && element.element.parentElement;
  }

  #replacePointToEditPoint() {
    if (!this.#isElementInDOM(this.#point)) {
      return;
    }

    this.#editPoint = new CreateEditEventView(
      this.#tripEvent,
      this.#destinations,
      this.#offers,
      this.#onCloseEditButtonClick,
      this.#onDataChange,
      this.#onEscKeyDown,
      FormType.EDIT
    );

    replace(this.#editPoint, this.#point);
    this.#onModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceEditPointToPoint() {
    if (!this.#isElementInDOM(this.#editPoint)) {
      return;
    }

    replace(this.#point, this.#editPoint);
    this.#mode = Mode.DEFAULT;
  }

  resetPointMode() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceEditPointToPoint();
    }
  }
}
