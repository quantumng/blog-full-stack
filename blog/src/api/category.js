import http from '../lib/http'
const baseUrl = '/api/mobile/category'

export default {
  list () {
    return http.get(`${baseUrl}/list`).then(res => res.data)
  }
}