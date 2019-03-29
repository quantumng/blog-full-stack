import Vue from 'Vue'
import moment from 'moment'
const filters = {
  formatTime (time) {
    if (!time) return false
    const fmt = moment(new Date(time)).format('YYYY-MM-DD HH:mm:ss')
    return fmt
  },
  install (Vue) {
    Vue.filter('fmtTime', this.formatTime)
  }
}

Vue.use(filters)

export default filters
