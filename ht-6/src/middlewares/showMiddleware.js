import {shows} from '../actions';
import {show as showFetch} from '../api';

export default (store) => next => action => {
    if(action.type === shows.request.toString()) {
        showFetch(action.payload).then(res => {
            store.dispatch(shows.success(res));
        }).catch(error => {
            store.dispatch(shows.failure(error));
        })
    }
  return next(action);
};
