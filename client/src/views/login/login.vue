<template>
  <div>
    <Form ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
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
        <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        <Button type="primary" @click="() => { this.$router.push({name: 'register'}) }">注册</Button>
        <Button @click="() => { this.$router.push({name: 'index'}) }">返回博客</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import userApi from '@/api/user'
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
      let { result } = await userApi.login(params)
      console.log(result)
      if (result) {
        const { url } = this.$route.query
        if (url) {
          this.$router.push({name: url})
        } else {
          this.$router.push({name: 'index'})
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
