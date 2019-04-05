<template>
  <div class="data-overview">
    <Row :gutter="30">
      <Col span="12">
        <h2>文章发布趋势</h2>
        <Echarts :options="pageOpt" :defaultStyle="styleConfig"></Echarts>
      </Col>
      <Col span="12">
        <h2>分类文章占比</h2>
        <Echarts :options="categoryOpt" :defaultStyle="styleConfig"></Echarts>
      </Col>
    </Row>
    <Row :gutter="30">
      <Col span="12">
        <h2>热门评论文章</h2>
        <Echarts :options="commentOpt" :defaultStyle="styleConfig"></Echarts>
      </Col>
      <Col span="12">
        <h2>用户发布占比</h2>
        <Echarts :options="userOpt" :defaultStyle="styleConfig"></Echarts>
      </Col>
    </Row>
  </div>
</template>

<script>
import Echarts from '@/components/Echarts'
import { pieConfig, barConfig, lineConfig } from './config.js'
import summaryApi from '@/api/summary.js'
export default {
  components: {
    Echarts
  },
  data () {
    return {
      styleConfig: 'height:280px;width:80%;padding:20px;box-sizing:border-box;',
      pageData: [],
      categoryData: [],
      commentData: [],
      userData: []
    }
  },
  computed: {
    pageOpt () {
      let options = JSON.parse(JSON.stringify(lineConfig))
      return options
    },
    categoryOpt () {
      let options = JSON.parse(JSON.stringify(pieConfig))
      return options
    },
    commentOpt () {
      let options = JSON.parse(JSON.stringify(barConfig))
      return options
    },
    userOpt () {
      let options = JSON.parse(JSON.stringify(pieConfig))
      return options
    }
  },
  created () {
    this.getData()
  },
  methods: {
    async getData () {
      let { result } = await summaryApi.overview()
      console.log(result)
    }
  }
}
</script>

<style scoped>
.data-overview {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
