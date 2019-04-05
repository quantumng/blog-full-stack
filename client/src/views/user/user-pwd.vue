<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="原始密码" prop="oldPassword">
        <Input type="password" v-model="formValidate.oldPassword" placeholder="原始密码"></Input>
      </FormItem>
      <FormItem label="新密码" prop="newPassword">
        <Input type="password" v-model="formValidate.newPassword" placeholder="请输入新密码"></Input>
      </FormItem>
      <FormItem label="确认密码" prop="confirmPassword">
        <Input type="password" v-model="formValidate.confirmPassword" placeholder="请输入确认密码"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">修改</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import userApi from '@/api/user'
import { mapGetters } from 'vuex'
export default {
  data () {
    const validatePassCheck = (isEqual) => {
      return (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (isEqual) {
            if (value !== this.formValidate.newPassword) {
              callback(new Error('两次输入的密码不相符'))
            } else {
              callback()
            }
          } else {
            if (value === this.formValidate.oldPassword) {
              callback(new Error('新密码不能与原始密码一致'))
            } else {
              callback()
            }
          }
        }
      }
    }
    return {
      formValidate: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      },
      ruleValidate: {
        oldPassword: [
          { required: true, message: '原始密码不能为空', trigger: 'blur' }
        ],
        newPassword: [
          { required: true, message: '新密码不能为空', trigger: 'blur' },
          { validator: validatePassCheck(false), trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '确认密码不能为空', trigger: 'blur' },
          { validator: validatePassCheck(true), trigger: 'blur' }
        ]
      }
    }
  },
  created () {
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          try {
            this.updatePassword(this.formValidate)
          } catch (err) {
            throw err
          }
        } else {
          this.$Message.error('请按要求填写')
        }
      })
    },
    async updatePassword (password) {
      const username = this.userInfo.username
      let params = { username, ...password }
      let { data } = await userApi.updatePassword(params)
      if (data.result) {
        this.$Message.success('修改成功！')
      } else {
        this.$Message.error('修改失败!')
      }
    }
  }
}
</script>

<style scoped>

</style>
