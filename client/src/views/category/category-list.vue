<template>
  <div class="page-list">
    <div class="btn-group">
      <!-- <Button type="primary">批量删除</Button> -->
      <Button type="primary" @click="() => { this.$router.push({name: 'CategoryEdit'})}">创建分类</Button>
    </div>
    <Table border ref="selection" :columns="columns" :data="data"></Table>
    <Page class="pagination" :total="100" show-sizer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '分类名称',
          key: 'name'
        },
        {
          title: '分类别名',
          key: 'navigation'
        },
        {
          title: '文章数量',
          key: 'total'
        },
        {
          title: '分类备注',
          key: 'desc'
        },
        {
          title: '创建时间',
          key: 'createAt'
        },
        {
          title: '修改时间',
          key: 'modifyAt'
        },
        {
          title: '操作',
          key: 'action',
          render: (h, {row}) => {
            return <div>
              <a href="javascript:void(0)" class="m-r-10">编辑</a>
              <a href="javascript:void(0)">删除</a>
            </div>
          }
        }
      ],
      data: [
        {
          name: '分类文章',
          navigation: '/cate',
          desc: '各种分类',
          total: 10,
          createAt: '2018-12-31',
          modifyAt: '2019-01-01'
        }
      ]
    }
  }
}
</script>

<style scoped>
.page-list {
  position: relative;
  height: 100%;
}
.btn-group {
  margin-bottom: 20px;
}
.pagination {
  position: absolute;
  bottom: 20px;
  right: 30px;
}
</style>
