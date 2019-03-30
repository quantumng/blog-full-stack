<template>
  <div class="page-list">
    <div class="btn-group">
      <!-- <Button type="primary">批量删除</Button> -->
      <Button type="primary" @click="() => { this.$router.push({name: 'CategoryEdit'})}">创建分类</Button>
    </div>
    <Table class="list-table" border ref="selection" :columns="columns" :data="categoryList"></Table>
    <Page class="pagination" :total="100" show-sizer />
  </div>
</template>

<script>
import categoryApi from '@/api/category'
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
          title: '分类名称',
          key: 'name'
        },
        {
          title: '分类别名',
          key: 'alias'
        },
        {
          title: '文章数量',
          key: 'total',
          render: (h, {row}) => {
            return <span>{row.pages.length}</span>
          }
        },
        {
          title: '分类备注',
          key: 'desc'
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
              <a href="javascript:void(0)" class="m-r-10" onClick={ () => { this.editCategory(row) } }>编辑</a>
              <a href="javascript:void(0)" onClick={ () => { this.deleteCategory(row) } }>删除</a>
            </div>
          }
        }
      ],
      categoryList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      let { data } = await categoryApi.list()
      this.categoryList = data.result
    },
    async deleteCategory (row) {
      console.log('delete', row)
      try {
        await categoryApi.delete(row['_id'])
        this.getList()
      } catch (err) {
        this.$Message.error(err)
        throw new Error(err)
      }
    },
    editCategory (row) {
      console.log('edit', row)
      this.$router.replace({name: 'CategoryEdit', query: {id: row._id}})
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
.list-table {
  margin-bottom: 80px;
}
.pagination {
  position: absolute;
  bottom: 0px;
  right: 30px;
}
</style>
