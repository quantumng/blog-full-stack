import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as homeReducer } from '../pages/home/store';
const reducer = combineReducers({
  header: headerReducer,
  detail: detailReducer,
  home: homeReducer
})
export default reducer