import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  categoryList: [],
  pageList: [],
  currentPage: 1,
  hasMorePage: true
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_PAGE_LIST:
      return state.merge({
        'pageList': action.list,
        'currentPage': 1,
        'hasMorePage': true
      })
    case actionTypes.ADD_PAGE_LIST:
      if (!action.list.length) {
        return state.set('hasMorePage', false)
      }
      return state.merge({
        'pageList': state.get('pageList').concat(action.list),
        'currentPage': action.nextPage,
        'hasMorePage': true
      })
    default:
      return state
  }
}