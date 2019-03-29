import http from '@/lib/http'
const basePath = '/admin/user'

export default {
  register (params) {
    return http.post(`${basePath}/register`, params)
  },
  login (params) {
    return http.post(`${basePath}/login`, params)
  },
  logout (params) {
    return http.post(`${basePath}/logout`, params)
  },
  updateUserInfo (params) {
    return http.post(`${basePath}/update`, params)
  }
}
