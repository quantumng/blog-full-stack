<template>
  <div>
    <div>
      <Button type="primary">批量删除</Button>
      <Button type="primary">创建文章</Button>
    </div>
    <Table border ref="selection" :columns="columns" :data="data"></Table>
    <Page :total="100" show-sizer />
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
          title: '标题',
          key: 'title'
        },
        {
          title: '内容',
          key: 'content'
        },
        {
          title: '作者',
          key: 'author'
        },
        {
          title: '分类',
          key: 'category'
        },
        {
          title: '评论数',
          key: 'commentCount'
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
          title: '第一篇文章',
          content: '这是第一篇文章',
          author: '吴晓权',
          category: '生活-饮食',
          commentCount: '365',
          createAt: '2018-12-31',
          modifyAt: '2019-01-01'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
