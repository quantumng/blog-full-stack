<template>
  <div class="main-aside-wrapper">
    <div class="header-logo">QBlog</div>
    <el-menu
      default-active="activeName"
      class="aside-menu"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelectMenu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="page">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item index="PageList">文章列表</el-menu-item>
        <el-menu-item index="PageEdit">编辑文章</el-menu-item>
      </el-submenu>
      <el-submenu index="category">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>目录管理</span>
        </template>
        <el-menu-item index="CategoryList">目录列表</el-menu-item>
        <el-menu-item index="CategoryEdit">编辑目录</el-menu-item>
      </el-submenu>
      <el-submenu index="comment">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>评论管理</span>
        </template>
        <el-menu-item index="CommentList">评论列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'PageList'
    }
  },
  methods: {
    handleOpen () {
      // console.log('open')
    },
    handleClose () {
      // console.log('close')
    },
    handleSelectMenu (index, indexList) {
      this.$router.push({name: index})
    }
  }
}
</script>

<style lang="scss">
.main-aside-wrapper {
  .header-logo {
    width: 200px;
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    background: #545c64;
    color: #fff;
  }
  .aside-menu {
    width: 100%;
    height: 100%;
  }
}
</style>
