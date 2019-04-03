<template>
  <div class="page-list">
    <div class="btn-group">
      <!-- <Button type="primary">批量删除</Button> -->
      <Button type="primary" @click="() => { this.$router.push({name: 'PageEdit'})}">创建文章</Button>
    </div>
    <Table border ref="selection" :columns="columns" :data="pageData"></Table>
    <Page class="pagination" :total="100" show-sizer />
  </div>
</template>

<script>
import pageApi from '@/api/page'
import filters from '@/lib/filters'
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
          title: '标题',
          key: 'title'
        },
        {
          title: '简述',
          key: 'desc'
        },
        {
          title: '作者',
          key: 'author',
          render: (h, {row}) => {
            return <span>{row.author.nickname || row.author.username}</span>
          }
        },
        {
          title: '分类',
          key: 'category',
          render: (h, {row}) => {
            return <span>{row.category.name}</span>
          }
        },
        {
          title: '评论数',
          key: 'commentCount',
          render: (h, {row}) => {
            return <span>{row.comment.length}</span>
          }
        },
        {
          title: '创建时间',
          key: 'createAt',
          render: (h, {row}) => {
            return <span>{ filters.formatTime(row.createAt) || '-' }</span>
          }
        },
        {
          title: '修改时间',
          key: 'updateAt',
          render: (h, {row}) => {
            return <span>{ filters.formatTime(row.updateAt) || '-' }</span>
          }
        },
        {
          title: '操作',
          key: 'action',
          render: (h, {row}) => {
            return <div>
              <a href="javascript:void(0)" class="m-r-10" onClick={() => { this.$router.push({name: 'PageEdit', query: { id: row._id }}) }}>编辑</a>
              <a href="javascript:void(0)" onClick={ () => { this.handleDeletePage(row) } }>作废</a>
            </div>
          }
        }
      ],
      pageData: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      let { data } = await pageApi.list(false)
      this.pageData = data.result
    },
    async handleDeletePage (data) {
      try {
        await pageApi.delete(data._id)
        await this.init()
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
</script>

<style scoped>
.page-list {
  position: relative;
  height: 100%;
  padding-bottom: 80px;
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
