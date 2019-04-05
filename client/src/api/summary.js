import http from '@/lib/http'
const basePath = '/admin/summary'

export default {
  overview () {
    return http.get(`${basePath}/overview`).then(res => res.data)
  }
}
