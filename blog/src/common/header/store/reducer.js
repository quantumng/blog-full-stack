import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  categoryList: [],
  showMenu: false,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CATEGORY_LIST:
      return state.set('categoryList', action.list)
    case actionTypes.TOGGLE_MENU_SHOW:
      return state.set('showMenu', action.showMenu)
    default:
      return state
  }
}