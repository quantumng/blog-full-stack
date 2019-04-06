<template>
  <div class="data-overview">
    <Row :gutter="20">
      <Col v-for="(item, index) in charts" :key="index" span="12">
        <h3>{{item.title}}</h3>
        <Echarts v-if="item.option && Object.keys(item.option).length" :options="item.option" :defaultStyle="styleConfig"></Echarts>
        <div v-else class="no-data">暂无数据</div>
      </Col>
    </Row>
  </div>
</template>

<script>
import Echarts from '@/components/Echarts'
import moment from 'moment'
import { pieConfig, barConfig, lineConfig } from './config.js'
import summaryApi from '@/api/summary.js'
export default {
  components: {
    Echarts
  },
  data () {
    return {
      styleConfig: 'height:280px;width:80%;padding:20px;box-sizing:border-box;',
      pageOpt: {},
      categoryOpt: {},
      commentOpt: {},
      userOpt: {}
    }
  },
  computed: {
    charts () {
      return [
        { option: this.pageOpt, title: '文章发布趋势' },
        { option: this.categoryOpt, title: '分类文章占比' },
        { option: this.commentOpt, title: '热门评论文章' },
        { option: this.userOpt, title: '用户发布占比' }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      let { result } = await summaryApi.overview()
      this.handlePageData(result.page)
      this.handleCategoryData(result.page, result.category)
      this.handleCommentData(result.page)
      this.handleUserData(result.page, result.user)
    },
    handlePageData (data) {
      let pageArr = []
      data.forEach(item => {
        let date = moment(new Date(item.createAt)).format('YYYY-MM-DD')
        let dateObj = pageArr.find(i => i.date === date) || null
        if (dateObj) {
          dateObj.value++
        } else {
          let info = { value: 1, date }
          pageArr.push(info)
        }
      })
      let xData = []
      let yData = []
      pageArr.forEach(v => {
        xData.push(v.date)
        yData.push(v.value)
      })
      let options = JSON.parse(JSON.stringify(lineConfig))
      options.xAxis.data = xData
      options.series.data = yData
      this.pageOpt = options
    },
    handleCategoryData (pages, categorys) {
      let categoryData = []
      categorys.forEach(item => {
        let category = { value: 0, name: item.name }
        pages.forEach(p => {
          if (p.category === item._id) {
            category.value++
          }
        })
        categoryData.push(category)
      })
      let options = JSON.parse(JSON.stringify(pieConfig))
      options.series.data = categoryData
      this.categoryOpt = options
    },
    handleCommentData (pages) {
      let commentData = []
      let xData = []
      let yData = []
      pages.forEach(item => {
        let comment = { value: item.comment.length, name: item.title }
        commentData.push(comment)
      })
      commentData.sort((a, b) => b.value - a.value).slice(0, 3).forEach(item => {
        xData.push(item.name)
        yData.push(item.value + Math.floor(Math.random() * 11))
      })
      let options = JSON.parse(JSON.stringify(barConfig))
      options.xAxis.data = xData
      options.series.data = yData
      this.commentOpt = options
    },
    handleUserData (pages, users) {
      let userData = []
      users.forEach(item => {
        let user = { value: 0, name: item.nickname || item.username }
        pages.forEach(p => {
          if (p.author === item._id) {
            user.value++
          }
        })
        userData.push(user)
      })
      let options = JSON.parse(JSON.stringify(pieConfig))
      options.series.data = userData
      this.userOpt = options
    }
  }
}
</script>

<style scoped>
.data-overview {
  width: 100%;
  height: 100%;
}
.no-data {
  text-align: center;
  line-height: 280px;
  height:280px;
  width:80%;
  margin: 10px 0;
  border: 1px dashed #ddd;
}
</style>
