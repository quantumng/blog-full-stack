<template>
  <div class="page-edit">
    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
        <FormItem label="标题" prop="title">
            <Input v-model="formValidate.title" placeholder="请输入标题"></Input>
        </FormItem>
        <FormItem label="分类" prop="category">
          <Select transfer v-model="formValidate.category" placeholder="请选择">
            <Option v-for="item in categoryList" :key="item._id" :value="item._id">{{item.name}}</Option>
          </Select>
        </FormItem>
        <FormItem style="z-index:99999;" label="作者" prop="author">
          <Select transfer v-model="formValidate.author" placeholder="请选择">
            <Option v-for="user in authorList" :key="user._id" :value="user._id">{{user.nickname || user.username}}</Option>
          </Select>
        </FormItem>
        <FormItem label="别名" prop="alias">
          <Input v-model="formValidate.alias" placeholder="请输入别名"></Input>
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
import categoryApi from '@/api/category'
import userApi from '@/api/user'
export default {
  data () {
    return {
      formValidate: {
        title: '',
        alias: '',
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
      this.formValidate.content = html
    }
    editor.create()
    this.editor = editor
  },
  methods: {
    async init () {
      try {
        let category = await categoryApi.list()
        let user = await userApi.list()
        this.categoryList = category.data.result
        this.authorList = user.data.result
        const { id } = this.$route.query
        if (id) {
          this.getPageData(id)
        }
      } catch (err) {
        throw new Error(err)
      }
    },
    async getPageData (id) {
      try {
        let { data } = await pageApi.details(id)
        console.log(data)
        const { result: { _id, ...pageData } } = data
        this.formValidate = { id: _id, ...pageData }
        this.$nextTick(() => {
          this.editor.txt.html(this.formValidate.content)
        })
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
          const { data } = await pageApi.add(params)
          const id = data.result
          this.$router.replace({ name: 'PageEdit', query: { id } })
        }
        if (methods === 'add') {
          this.$router.push({name: 'PageList'})
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
