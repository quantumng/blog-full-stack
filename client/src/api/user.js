import http from '@/lib/http'
const basePath = '/admin/user'

export default {
  checkLogin () {
    return http.get(`${basePath}/checkLogin`)
  },
  register (params) {
    return http.post(`${basePath}/register`, params)
  },
  login (params) {
    return http.post(`${basePath}/login`, params)
  },
  logout (params) {
    return http.post(`${basePath}/logout`, params)
  },
  update (params) {
    return http.post(`${basePath}/update`, params)
  },
  list () {
    return http.get(`${basePath}/list`)
  }
}
