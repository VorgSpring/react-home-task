import {search} from '../actions';
import {search as searchFetch} from '../api';

export default (store) => next => action => {
    if(action.type === search.request.toString()) {
        searchFetch(action.payload).then(res => {
            store.dispatch(search.success(res));
        }).catch(error => {
            store.dispatch(search.failure(error));
        })
    }
  return next(action);
};
