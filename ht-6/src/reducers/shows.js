import {shows} from '../actions';
import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

const isFetching = handleActions(
  {
    [shows.request]: () => true,
    [shows.success]: () => false,
    [shows.failure]: () => false,
  },
  true,
);

const film = handleActions(
  {
    [shows.success]: (state, action) => action.payload
  },
  null,
);

const error = handleActions(
  {
    [shows.request]: () => null,
    [shows.success]: () => null,
    [shows.failure]: (state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  isFetching,
  film,
  error,
});

export const getIsLoading = state => state.shows.isFetching;
export const getFilm = state => state.shows.film
export const getError = state => state.shows.error;
