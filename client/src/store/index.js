import Vue from 'vue'
import Vuex from 'vuex'
import userApi from '@/api/user'

Vue.use(Vuex)

const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS'
const SET_USER_INFO = 'SET_USER_INFO'

const state = {
  userInfo: {},
  isLogin: false
}
const getters = {
  userInfo: state => state.userInfo,
  isLogin: state => state.isLogin,
  isAdmin: state => (state.userInfo.role === 'admin')
}
const mutations = {
  [SET_LOGIN_STATUS] (state, status) {
    state.isLogin = status
  },
  [SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
const actions = {
  setLoginStatus ({commit}, status) {
    commit(SET_LOGIN_STATUS, status)
  },
  setUserInfo ({commit}, userInfo) {
    commit(SET_USER_INFO, userInfo)
  },
  async checkLogin ({commit}) {
    try {
      let { data } = await userApi.checkLogin()
      commit(SET_LOGIN_STATUS, true)
      commit(SET_USER_INFO, data.result)
      return Promise.resolve()
    } catch (err) {
      commit(SET_LOGIN_STATUS, false)
      commit(SET_USER_INFO, {})
      return Promise.reject(err)
    }
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
