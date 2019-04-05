<template>
  <div class="echarts-component" :style="defaultStyle">
    <v-chart ref="echarts" :init-options="initOptions" :options="options" />
  </div>
</template>

<script>
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'

export default {
  components: {
    'v-chart': ECharts
  },
  props: {
    options: {
      type: Object,
      required: true
    },
    defaultStyle: {
      type: String,
      default: 'height:300px;'
    }
  },
  data () {
    return {
      initOptions: {
        renderer: 'canvas'
      }
    }
  }
}
</script>

<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
