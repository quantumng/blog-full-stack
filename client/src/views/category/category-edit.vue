<template>
  <div>
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
      <FormItem label="分类标题" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入标题"></Input>
      </FormItem>
      <FormItem label="分类别名" prop="alias">
        <Input v-model="formValidate.alias" placeholder="请输入标题"></Input>
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
import categoryApi from '@/api/category'
export default {
  data () {
    return {
      formValidate: {
        name: '',
        alias: '',
        desc: ''
      },
      ruleValidate: {
        name: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        alias: [
          { required: true, message: '别名不能为空', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '内容不能为空', trigger: 'blur' },
          { type: 'string', min: 2, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      const { id } = this.$route.query
      if (id) {
        this.getCategoryInfo(id)
      }
    },
    async getCategoryInfo (id) {
      try {
        const { data } = await categoryApi.details(id)
        this.formValidate = data.result
      } catch (err) {
        throw err
      }
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.queryData(this.formValidate)
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    async queryData (params) {
      try {
        if (params['_id']) {
          await categoryApi.update(params)
        } else {
          await categoryApi.add(params)
        }
        this.$router.replace({name: 'CategoryList'})
      } catch (err) {
        throw new Error(err)
      }
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
