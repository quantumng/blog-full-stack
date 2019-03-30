<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="用户名" prop="username">
        <Input v-model="formValidate.username" placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" v-model="formValidate.password" placeholder="请输入密码"></Input>
      </FormItem>
      <FormItem label="昵称" prop="nickname">
        <Input v-model="formValidate.nickname" placeholder="请输入昵称"></Input>
      </FormItem>
      <FormItem label="邮箱" prop="email">
        <Input v-model="formValidate.email" placeholder="请输入邮箱"></Input>
      </FormItem>
      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="male">男</Radio>
          <Radio label="female">女</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="自我介绍" prop="desc">
        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">修改</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import userApi from '@/api/user'
export default {
  data () {
    return {
      formValidate: {
        username: '',
        password: '',
        nickname: '',
        email: '',
        gender: 'male',
        desc: ''
      },
      ruleValidate: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  mounted () {
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          try {
            this.register(this.formValidate)
          } catch (err) {
            throw err
          }
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    async register (params) {
      let { data } = await userApi.register(params)
      if (data) {
        this.$Message.success('注册成功！')
        this.$router.push({name: 'login'})
      } else {
        this.$Message.error('注册失败!')
      }
    },
    pushToBlog () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
