<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="layout-logo">QBlog</div>
        <div class="layout-header">
          <Dropdown class="" transfer style="margin-left: 20px">
            <a href="javascript:void(0)" style="color:#fff;">
              个人中心
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>设置</DropdownItem>
              <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="activeName" theme="light" width="auto" :open-names="['page']" @on-select="handleSelectMenu">
            <Submenu name="page">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                文章管理
              </template>
              <MenuItem name="PageList">文章列表</MenuItem>
              <MenuItem name="PageEdit">编辑文章</MenuItem>
            </Submenu>
            <Submenu name="category">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                目录管理
              </template>
              <MenuItem name="CategoryList">目录列表</MenuItem>
              <MenuItem name="CategoryEdit">编辑目录</MenuItem>
            </Submenu>
            <Submenu name="comment">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                评论管理
              </template>
              <MenuItem name="CommentList">评论列表</MenuItem>
            </Submenu>
            <Submenu name="user">
              <template slot="title">
                <Icon type="ios-body" />
                用户管理
              </template>
              <MenuItem name="UserList">用户列表</MenuItem>
              <MenuItem name="UserEdit">编辑用户</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
            <Breadcrumb :style="{margin: '24px 0'}">
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <router-view></router-view>
            </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      activeName: 'page'
    }
  },
  methods: {
    handleSelectMenu (name) {
      this.$router.push({name})
    }
  }
}
</script>

<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  color: #fff;
  font-size: 24px;
}
.layout-header {
  float: right;
  color: #fff;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
