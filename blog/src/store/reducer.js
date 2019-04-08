import { combineReducers } from 'redux-immutable';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as homeReducer } from '../pages/home/store';
const reducer = combineReducers({
  detail: detailReducer,
  home: homeReducer
})
export default reducer