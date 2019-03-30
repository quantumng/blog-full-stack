import http from '@/lib/http'
const basePath = '/admin/page'

export default {
  list (isDelete) {
    return http.get(`${basePath}/list?isDelete=${isDelete}`)
  },
  details (id) {
    return http.get(`${basePath}?id=${id}`)
  },
  add (params) {
    return http.post(`${basePath}/add`, params)
  },
  update (params) {
    console.log('params', params)
    return http.post(`${basePath}/update`, params)
  },
  delete (id) {
    return http.post(`${basePath}/delete?id=${id}`)
  }
}
