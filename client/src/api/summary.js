import http from '@/lib/http'
const basePath = '/api/admin/summary'

export default {
  overview () {
    return http.get(`${basePath}/overview`).then(res => res.data)
  }
}
