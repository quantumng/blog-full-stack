<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="">
                  <div class="layout-logo"><router-link to="/">QBlog</router-link></div>
                  <div class="layout-nav">
                    <Dropdown class="" transfer style="margin-left: 20px" @on-click="handleDropClick">
                      <a href="javascript:void(0)" style="color:#fff;">
                        个人中心
                        <Icon type="ios-arrow-down"></Icon>
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem name="setting">设置</DropdownItem>
                        <DropdownItem name="logout">退出</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Menu>
            </Header>
            <Layout class="main-container">
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu :active-name="activeName" theme="light" width="auto" :open-names="['page']" @on-select="handleSelectMenu">
                        <Submenu name="page">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                文章管理
                            </template>
                            <MenuItem name="PageList">文章列表</MenuItem>
                            <MenuItem name="PageEdit">编辑文章</MenuItem>
                            <MenuItem name="PageRecycle">废纸篓</MenuItem>
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
                                <Icon type="ios-analytics"></Icon>
                                用户管理
                            </template>
                            <MenuItem name="UserList">用户列表</MenuItem>
                            <MenuItem name="UserEdit">个人设置</MenuItem>
                            <MenuItem name="UserPassword">修改密码</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <!-- <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb> -->
                    <Content :style="{margin: '24px', padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                    <Footer class="layout-footer-center">Copyright&copy;2018-2019 吴晓权 版权所有</Footer>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import userApi from '@/api/user'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    activeName () {
      return this.$route.name || 'PageList'
    }
  },
  mounted () {
    console.log(this.$route)
  },
  methods: {
    ...mapActions(['setLoginStatus', 'setUserInfo']),
    handleDropClick (name) {
      if (name === 'setting') {
        this.$router.push({name: 'UserEdit'})
      } else {
        this.logout()
      }
    },
    async logout () {
      try {
        await userApi.logout({username: this.userInfo.username})
        this.setLoginStatus(false)
        this.setUserInfo({})
        this.$router.push({name: 'login'})
      } catch (err) {
        throw new Error(err)
      }
    },
    handleSelectMenu (name) {
      this.$router.push({name})
    }
  }
}
</script>

<style scoped>
.layout{
  height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo {
    height: 30px;
    line-height: 30px;
    font-size: 30px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
 .layout-logo a {
   color: #fff;
 }
.layout-nav{
    width: 100px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
