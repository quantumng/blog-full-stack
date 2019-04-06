export const pieConfig = {
  backgroundColor: '#fff',
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: {
    name: '文章数量',
    type: 'pie',
    radius: '55%',
    center: ['50%', '50%'],
    data: [].sort(function (a, b) { return a.value - b.value }),
    roseType: 'radius',
    label: {
      normal: {
        textStyle: {
          color: 'rgba(0, 0, 0, 0.8)'
        }
      }
    },
    labelLine: {
      normal: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      }
    },
    animationType: 'scale',
    animationEasing: 'elasticOut',
    animationDelay: function (idx) {
      return Math.random() * 200
    }
  }
}

export const barConfig = {
  title: {
    text: '暂无评论功能，数据为随机生成',
    textStyle: {
      color: '#ddd',
      fontWeight: 'light',
      fontSize: 12
    },
    left: 'center'
  },
  tooltip: {
    formatter: '标题：{b}<br/> 评论数: {c}条'
  },
  xAxis: {
    name: '标题',
    type: 'category',
    data: [],
    textStyle: {
      width: 10
    }
  },
  yAxis: {
    name: '评论数',
    type: 'value'
  },
  series: {
    data: [],
    type: 'bar'
  }
}

export const lineConfig = {
  tooltip: {
    formatter: '日期：{b}<br/> 文章数: {c}篇'
  },
  xAxis: {
    type: 'category',
    data: [],
    name: '日期'
  },
  yAxis: {
    type: 'value',
    name: '数量'
  },
  series: {
    data: [],
    type: 'line',
    lineStyle: {
      normal: {
        opacity: 0.5
      }
    }
  }
}
