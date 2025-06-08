import TripPresenter from './presenter/trip-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import TripEventsModel from './model/trip-event-model.js';
import FilterModel from './model/filter-model.js';
import NewPointButtonPresenter from './presenter/new-event-button-presenter.js';
import PointsApiService from './service/api-service.js';
import { END_POINT, AUTHORIZATION } from './const.js';

const pointsApiService = new PointsApiService(END_POINT, AUTHORIZATION);
const tripEventsModel = new TripEventsModel(pointsApiService);
const filterModel = new FilterModel();
const newPointButton = new NewPointButtonPresenter(
  document.querySelector('.trip-main')
);

tripEventsModel.init();

const filterPresenter = new FilterPresenter(
  document.querySelector('.trip-controls__filters'),
  filterModel,
  tripEventsModel
);

new TripPresenter(
  tripEventsModel,
  filterModel,
  newPointButton,
  filterPresenter
).init();
