import { render } from '../render.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import AddEventView from '../view/add-event-view.js';
import EditEventView from '../view/edit-event-view.js';
import RouteSpotView from '../view/trip-event-view.js';
import EventList from '../view/event-list-view.js';


export default class TripPresenter {
  constructor() {
    this.eventsListContainer = new EventList;
    this.filterContainer = document.querySelector('.trip-controls__filters');
    this.eventsContainer = document.querySelector('.trip-events');
  }

  init() {
    render(new FilterView(), this.filterContainer);
    render(new SortView(), this.eventsContainer);
    render(this.eventsListContainer, this.eventsContainer);
    render(new EditEventView(), this.eventsListContainer.getElement());

    for (let i = 0; i < 3; i++) {
      render(new RouteSpotView(), this.eventsListContainer.getElement());
    }

    render(new AddEventView(), this.eventsListContainer.getElement());
  }
}
