import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  categoryList: [],
  pageList: [],
  currentPage: 1,
  showScroll: false,
  hasMorePage: true
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_PAGE_LIST:
      return state.set('pageList', action.list)
    case actionTypes.ADD_PAGE_LIST:
      if (!action.list.length) {
        return state.set('hasMorePage', false)
      }
      return state.merge({
        'pageList': state.get('pageList').concat(action.list),
        'currentPage': action.nextPage
      })
    default:
      return state
  }
}