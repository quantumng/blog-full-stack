<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="头像" prop="avatar">
        <div>待开通</div>
      </FormItem>
      <FormItem label="用户名" prop="username">
        <Input disabled v-model="formValidate.username" placeholder="请输入用户名"></Input>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      formValidate: {
        id: '',
        avatar: '',
        username: '',
        nickname: '',
        email: '',
        gender: 'male',
        desc: ''
      },
      ruleValidate: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getUserInfo()
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    ...mapActions(['setUserInfo']),
    async getUserInfo () {
      let { data } = await userApi.detail(this.userInfo.username)
      console.log('data', data)
      const { _id, avatar, username, nickname, email, gender, desc } = data.result
      this.formValidate = {
        id: _id,
        avatar,
        username,
        nickname,
        email,
        gender,
        desc
      }
      this.setUserInfo(this.formValidate)
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          try {
            this.updateInfo(this.formValidate)
          } catch (err) {
            throw err
          }
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    async updateInfo (params) {
      let { data } = await userApi.update(params)
      if (data.result) {
        this.$Message.success('修改成功！')
        this.setUserInfo(this.formValidate)
      } else {
        this.$Message.error('修改失败!')
      }
    }
  }
}
</script>

<style scoped>

</style>
