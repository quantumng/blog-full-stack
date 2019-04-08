import http from '../lib/http'
const baseUrl = '/api/blog/category'

export default {
  list () {
    return http.get(`${baseUrl}/list`).then(res => res.data)
  }
}