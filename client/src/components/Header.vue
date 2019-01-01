<template>
  <div class="header-wrapper">
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'header'
    }
  },
  methods: {
    handleSelectMenu () {
      console.log('select')
    }
  }
}
</script>

<style lang="scss">
.header-wrapper {
  background: #545c64;
  .header-btn {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    width: 100px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    &:hover {
      background: rgb(67, 74, 80);
    }
    &-setting {
      float: right;
    }
  }
}
</style>
