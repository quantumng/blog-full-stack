import http from '@/lib/http'
const basePath = '/api/admin/category'

export default {
  list () {
    return http.get(`${basePath}/list`)
  },
  details (id) {
    return http.get(`${basePath}?id=${id}`)
  },
  add (params) {
    return http.post(`${basePath}/add`, params)
  },
  update (params) {
    return http.post(`${basePath}/update`, params)
  },
  delete (id) {
    return http.post(`${basePath}/delete?id=${id}`)
  }
}
