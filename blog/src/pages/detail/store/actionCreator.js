import { fromJS } from 'immutable';
import pageApi from '../../../../src/api/page'
import * as actionTypes from './actionTypes'

const initPageData = (data) => ({
  type: actionTypes.INIT_PAGE_DATA,
  data: fromJS(data)
})

export const getPageData = (params) => {
  return async (dispatch) => {
    const { result } = await pageApi.detail(params)
    dispatch(initPageData(result))
  }
}