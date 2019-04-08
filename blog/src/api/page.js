import http from '../lib/http';
const baseUrl = '/api/blog/page'

export default {
  list (params) {
    return http.post(`${baseUrl}/list`, params).then(res => res.data)
  },
  detail(id) {
    return http.get(`${baseUrl}?id=${id}`).then(res => res.data)
  }
}