import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  title: '',
  content: '',
  author: '',
  category: '',
  categoryId: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.INIT_PAGE_DATA:
      return state.merge({
        'title': action.data.get('title'),
        'content': action.data.get('content'),
        'author': action.data.getIn(['author', 'nickname']) || action.data.getIn(['author', 'username']),
        'category': action.data.getIn(['category', 'name']),
        'categoryId': action.data.getIn(['category', '_id'])
      })
    default:
      return state
  }
}