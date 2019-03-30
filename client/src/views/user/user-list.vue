<template>
  <div class="user-list">
    <div class="btn-group">
      <!-- <Button type="primary">批量删除</Button> -->
    </div>
    <Table border ref="selection" :columns="columns" :data="userData"></Table>
    <Page class="pagination" :total="100" show-sizer />
  </div>
</template>

<script>
import userApi from '@/api/user'
import filters from '@/lib/filters'
export default {
  data () {
    return {
      columns: [
        {
          title: '用户名',
          key: 'username'
        },
        {
          title: '昵称',
          key: 'nickname'
        },
        {
          title: '性别',
          key: 'gender',
          render: (h, {row}) => {
            if (row.gender === 'male') return <span>{'男'}</span>
            if (row.gender === 'female') return <span>{'女'}</span>
            return <span>{'-'}</span>
          }
        },
        {
          title: '邮箱',
          key: 'email'
        },
        {
          title: '角色',
          key: 'role',
          render: (h, {row}) => {
            return <div>
              <i-select value={row.role} style={'width:80px'}>
                <i-option value="admin">管理员</i-option>
                <i-option value="writer">作者</i-option>
                <i-option value="passenger">路人</i-option>
              </i-select>
            </div>
          }
        },
        {
          title: '文章数',
          key: 'page',
          render: (h, {row}) => {
            return <span>{row.page.length}</span>
          }
        },
        {
          title: '评论数',
          key: 'comment',
          render: (h, {row}) => {
            return <span>{row.comment.length}</span>
          }
        },
        {
          title: '注册时间',
          key: 'createAt',
          render: (h, {row}) => {
            return <span>{ filters.formatTime(row.createAt) || '-' }</span>
          }
        },
        {
          title: '自我描述',
          key: 'desc'
        }
        // {
        //   title: '操作',
        //   key: 'action',
        //   render: (h, {row}) => {
        //     return <div>
        //       <a href="javascript:void(0)" class="m-r-10">编辑</a>
        //       <a href="javascript:void(0)">删除</a>
        //     </div>
        //   }
        // }
      ],
      userData: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      try {
        let { data } = await userApi.list()
        this.userData = data.result
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
</script>

<style scoped>
.user-list {
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
