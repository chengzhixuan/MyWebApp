<template>
  <div class="course">
    <ArticleList title="course" ref="articlelist"></ArticleList>
    <ArticleContent ref="articlecontent" @click.native="listhidd"></ArticleContent>
  </div>
</template>

<script>
  import {ArticleList, ArticleContent} from '../../components'
  export default{
    data () {
      return {
        article: '',
        initid: null
      }
    },
    props: [],
    components: {
      ArticleList,
      ArticleContent
    },
    filters: {},
    mounted () {
    },
    methods: {
      listhidd () {
        this.$refs.articlelist.listhidd()
      }
    },
    created () {
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .course{
    width: 100%;
    min-height: 100% - 8.2%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
  }
</style>
