<template>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
  </el-tree>
</template>

<script>
  import api from '../api'
  export default{
    data () {
      return {
        data: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    props: ['title'],
    components: {},
    filters: {},
    mounted () {
    },
    methods: {
      handleNodeClick () {
      }
    },
    created () {
      api.article.getCourseList(this.title).then(res => {
        console.log(res)
        this.data = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>
