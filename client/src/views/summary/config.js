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
  series: [
    {
      name: '文章数量',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        // {value: 335, name: '直接访问'},
        // {value: 310, name: '邮件营销'},
        // {value: 274, name: '联盟广告'},
        // {value: 235, name: '视频广告'},
        // {value: 400, name: '搜索引擎'}
      ].sort(function (a, b) { return a.value - b.value }),
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
  ]
}

export const barConfig = {
  tooltip: {
    formatter (params) {
      return `<div>标题：${params.name}</div><div>评论数量：${params.data}</div>`
    }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [120, 200, 150, 80, 70, 110, 130],
    type: 'bar'
  }]
}

export const lineConfig = {
  tooltip: {
    formatter (params) {
      return `<div>月份：${params.name}</div><div>文章数量：${params.data}</div>`
    }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line',
    lineStyle: {
      normal: {
        opacity: 0.5
      }
    }
  }]
}
