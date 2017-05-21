<template>
  <div class="articlecont">
    <article class="articlecontent" v-loading.body="loading">
      <p class="title">{{article.title}}</p>
      <p class="message">
        <strong>作者:</strong>
        <span>{{article.author}}/</span>
        <strong>阅读:</strong>
        <span>{{article.readnum}}/</span>
        <strong>时间:</strong>
        <span>{{article.time|filetime}}</span>
      </p>
      <div class="content">
        {{article.content}}
      </div>
    </article>
    <Discussx :reply="article.replytopic"></Discussx>
  </div>
</template>

<script>
  import api from '../api'
  import { mapGetters } from 'vuex'
  import * as actionType from '../store/action-type'
  import Discussx from '../components/discuss.vue'
  export default{
    data () {
      return {
        article: {
          time: ''
        },
        loading: false,
        index: 1
      }
    },
    props: [],
    components: {
      Discussx
    },
    filters: {},
    watch: {
      id (value) {
        this.getarticle(value)
      }
    },
    computed: {
      ...mapGetters({
        id: 'article_id'
      })
    },
    mounted () {
      let value = this.$route.query.id
      if (value) {
        this.index = 0
        setTimeout(() => {
          this.$store.dispatch(actionType.ARTICLE_ARTICLEIDS, value)
        }, 1000)
      }
    },
    methods: {
      getarticle (value) {
        this.loading = true
        if (this.index === 0) {
          this.index = 1
          return
        }
        api.article.getArticleId(value).then(res => {
          this.article = res.data
          this.loading = false
        }).catch(err => {
          this.loading = false
          console.log(err)
        })
      }
    },
    created () {
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .articlecont{
    width: 100%;
    overflow: auto;
  }
  .articlecontent{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-direction: column;
    .title{
      text-align: center;
      font-size: 0.5rem;
    }
    .message{
      font-size: 0.2rem;
      text-align: center;
      margin: 5px 0px;
      span{
        color: #0593d3;
      }
    }
    .content{
      font-size: 0.25rem;
      text-indent: 0.5rem;
      color: #666;
      width: 95%;
      margin: auto;
    }
  }
</style>
