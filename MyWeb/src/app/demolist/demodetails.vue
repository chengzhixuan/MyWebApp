<template>
  <div class="demodetails">
    <article class="demodetailsmes" v-loading.body="loading">
      <p class="title">{{demodetails.title}}</p>
      <p class="message">
        <strong>作者:</strong>
        <span>{{demodetails.author}}/</span>
        <strong>阅读:</strong>
        <span>{{demodetails.readnum}}/</span>
        <strong>时间:</strong>
        <span>{{demodetails.time}}</span>
      </p>
      <div class="content">
        {{demodetails.content}}
      </div>
    </article>
    <el-carousel :interval="5000" arrow="never" height="500px" indicator-position="none">
      <el-carousel-item v-for="(item,index) in demodetails.image" :key="index">
        <img :src="item">
      </el-carousel-item>
    </el-carousel>
    <Discussx :reply="demodetails.demotopic"></Discussx>
    <ReturnMes></ReturnMes>
  </div>
</template>

<script>
  import api from '../../api'
  import {Discussx, ReturnMes} from '../../components'
  export default{
    data () {
      return {
        demodetails: {},
        loading: false
      }
    },
    props: [],
    components: {Discussx, ReturnMes},
    filters: {},
    mounted () {
    },
    methods: {},
    created () {
      let demoid = this.$route.params.demolistid
      this.loading = true
      api.demolist.getDemoDetails(demoid).then(res => {
        this.loading = false
        this.demodetails = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .demodetails{
    overflow-y: auto;
    .el-carousel{
      width: 90%;
      margin: auto;
      margin-top: 10px;
      img{
        width: 100%;
        height: 100%;
        overflow-x: auto;
      }
    }
    .demodetailsmes{
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
  }
</style>
