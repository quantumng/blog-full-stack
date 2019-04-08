<template>
  <div class="admin-login">
    <h2 class="login-form-title">degebug.com 博客管理系统</h2>
    <Form class="login-form" ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="username">
        <Input type="text" v-model="formInline.username" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button class="form-btn" type="primary" @click="handleSubmit('formInline')">登录</Button>
        <Button disabled class="form-btn" type="primary" @click="() => { this.$router.push({name: 'register'}) }">注册</Button>
        <Button class="form-btn" @click="() => { this.goToIndex() }">返回博客</Button>
        <p>注册功能暂不开放，这里提供一个测试账号，用户名：test,密码：000000</p>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import userApi from '@/api/user'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formInline: {
        username: '',
        password: ''
      },
      ruleInline: {
        username: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapActions(['setLoginStatus', 'setUserInfo']),
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login(this.formInline)
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    async login (params) {
      let { data } = await userApi.login(params)
      if (data.status === 200) {
        this.setLoginStatus(true)
        this.setUserInfo(data.result)
        const { url } = this.$route.query
        const routerName = url || 'index'
        this.$router.replace({ name: routerName })
      }
    },
    goToIndex () {
      window.open('//www.degebug.com/', '_blank')
    }
  }
}
</script>

<style scoped>
.login-form-title {
  text-align: center;
  margin: 100px 0 20px 0;
}
.login-form {
  border: 1px solid rgba(0, 0, 0, .1);
  border-radius: 8px;
  padding: 30px;
  width: 450px;
  margin: 0 auto;
  text-align: center;
}
.form-btn {
  margin: 0 8px;
}
</style>
