import {search} from '../actions';
import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux';

const isFetching = handleActions(
  {
    [search.request]: () => true,
    [search.success]: () => false,
    [search.failure]: () => false,
  },
  false,
);

const isFetched = handleActions({
  [search.request]: () => false,
  [search.success]: () => true,
  [search.failure]: () => true,
}, false)

const films = handleActions(
  {
    [search.success]: (state, action) => [ ...action.payload ],
  },
  [],
);

const error = handleActions(
  {
    [search.request]: () => null,
    [search.success]: () => null,
    [search.failure]: (state, action) => action.payload,
  },
  null,
);

export default combineReducers({
  isFetching,
  isFetched,
  films,
  error,
});

export const getIsLoading = state => state.search.isFetching;
export const getIsLoaded = state => state.search.isFetched;
export const getFilms =  state => state.search.films;
export const getError = state => state.search.error;
