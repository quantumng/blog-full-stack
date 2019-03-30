<template>
  <div class="page-edit">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="标题" prop="title">
            <Input v-model="formValidate.name" placeholder="请输入标题"></Input>
        </FormItem>
        <FormItem label="别名" prop="navigation">
            <Input v-model="formValidate.navigation" placeholder="请输入别名"></Input>
        </FormItem>
        <FormItem label="分类" prop="category">
          <Select v-model="formValidate.city" placeholder="请选择">
            <Option v-for="item in categoryList" :key="item.value" value="item.value">{{item.label}}</Option>
          </Select>
        </FormItem>
        <FormItem label="作者" prop="author">
          <Select v-model="formValidate.city" placeholder="请选择">
            <Option v-for="user in authorList" :key="user.id" value="user.id">{{user.label}}</Option>
          </Select>
        </FormItem>
        <FormItem label="内容" prop="content" class="content-editor">
          <div ref="editor" style="text-align:left"></div>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formValidate', 'add')">发布</Button>
            <Button @click="handleSubmit('formValidate', 'save')" style="margin-left: 8px">保存</Button>
        </FormItem>
    </Form>
  </div>
</template>

<script>
import E from 'wangeditor'
import pageApi from '@/api/page'
export default {
  data () {
    return {
      formValidate: {
        title: '',
        navigation: '',
        category: '',
        author: '',
        content: ''
      },
      categoryList: [],
      authorList: [],
      ruleValidate: {
        title: [
          { required: true, message: '标题不能为空', trigger: 'blur' }
        ],
        navigation: [
          { required: true, message: '别名不能为空', trigger: 'blur' }
        ],
        category: [
          { required: true, message: '请选择分类目录', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '请选择作者', trigger: 'change' }
        ],
        content: [
          { required: true, message: '内容不能为空', trigger: 'blur' },
          { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.init()
  },
  mounted () {
    var editor = new E(this.$refs.editor)
    editor.customConfig.onchange = (html) => {
      this.content = html
    }
    editor.create()
  },
  methods: {
    async init () {
      const { id } = this.$route.query
      if (id) {
        this.getPageData(id)
      }
    },
    async getPageData (id) {
      try {
        let data = await pageApi.details(id)
        console.log(data)
        const { _id, ...pageData } = data
        this.formValidate = pageData
      } catch (err) {
        throw new Error(err)
      }
    },
    handleSubmit (name, methods) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.queryPageData(this.formValidate, methods)
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    async queryPageData (params, methods) {
      try {
        if (params.id) {
          await pageApi.update(params)
        } else {
          await pageApi.add(params)
        }
        if (methods === 'add') {
          this.$route.replace({name: 'PageList'})
        }
      } catch (err) {
        throw new Error(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
