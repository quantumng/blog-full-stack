<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="分类标题" prop="name">
          <Input v-model="formValidate.name" placeholder="请输入标题"></Input>
        </FormItem>
        <FormItem label="分类别名" prop="navigation">
          <Input v-model="formValidate.navigation" placeholder="请输入标题"></Input>
        </FormItem>
        <FormItem label="描述" prop="desc">
          <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formValidate')">发布</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formValidate: {
        name: '',
        navigetion: '',
        desc: ''
      },
      ruleValidate: {
        title: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '内容不能为空', trigger: 'blur' },
          { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
