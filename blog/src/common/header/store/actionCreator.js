// import { List } from 'immutable';
import categoryApi from '../../../../src/api/category'
import * as actionTypes from './actionTypes'

export const initCategoryList = (data) => {
  return {
    type: actionTypes.INIT_CATEGORY_LIST,
    list: data
  }
}

export const getCategoryList = () => {
  return async (dispatch) => {
    let { result } = await categoryApi.list()
    const action = initCategoryList(result)
    dispatch(action)
  }
}

export const toggleMenuShow = (showMenu) => {
  return {
    type: actionTypes.TOGGLE_MENU_SHOW,
    showMenu
  }
}
