// import { List } from 'immutable';
import pageApi from '../../../../src/api/page'
import * as actionTypes from './actionTypes'

export const initPageList = (data) => {
  return {
    type: actionTypes.INIT_PAGE_LIST,
    list: data
  }
}

export const getPageList = (params) => {
  return async (dispatch) => {
    let { result } = await pageApi.list(params)
    const action = initPageList(result)
    dispatch(action)
  }
}

export const getMoreList = (currentPage) => {
  return async (dispatch) => {
    currentPage++
    let { result } = await pageApi.list({page: currentPage})
    dispatch(addPageList(result, currentPage))
  }
}

export const addPageList = (data, nextPage) => {
  return {
    type: actionTypes.ADD_PAGE_LIST,
    list: data,
    nextPage
  }
}
