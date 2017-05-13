<template>
  <div class="index">
    <div class="hot">
      <h6>热门文章</h6>
      <el-carousel :interval="5000" arrow="always" height="200px" indicator-position="none">
        <el-carousel-item v-for="item in hotarticle" :key="item">
          <img :src="item.image">
          <div>
            <p>{{item.title}}</p>
            <p>{{item.subhead}}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="hot">
      <h6>经典demo</h6>
      <el-carousel :interval="5000" arrow="always" height="200px" indicator-position="none">
        <el-carousel-item v-for="item in hotdemo" :key="item">
          <img :src="item.image">
          <div>
            <p>{{item.title}}</p>
            <p>{{item.subhead}}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="hot">
      <h6>最新发表</h6>
      <el-carousel :interval="5000" arrow="always" height="200px" indicator-position="none">
        <el-carousel-item v-for="item in newarticle" :key="item">
          <img :src="item.image">
          <div>
            <p>{{item.title}}</p>
            <p>{{item.subhead}}</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import api from '../../api'
  export default{
    data () {
      return {
        hotarticle: [],
        hotdemo: [],
        newarticle: []
      }
    },
    props: [],
    components: {},
    filters: {},
    mounted () {
    },
    methods: {
      gethotdemo () {
        api.article.getHotDemo().then(res => {
          this.hotdemo = res.data
        }).catch(err => {
          console.log(err)
        })
      },
      gethotarticle () {
        api.article.getHotArticle().then(res => {
          this.hotarticle = res.data
        }).catch(err => {
          console.log(err)
        })
      },
      getnewarticle () {
        api.article.getNewArticle().then(res => {
          this.newarticle = res.data
        }).catch(err => {
          console.log(err)
        })
      }
    },
    created () {
      this.gethotarticle()
      this.gethotdemo()
      this.getnewarticle()
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .index{
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    overflow: auto;
    margin:20px auto;
    .hot{
      margin-bottom: 20px;
      width: 100%;
      h6{
        margin-bottom: 10px;
        font-weight: 500;
      }
      .el-carousel__item{
        img{
          width: 100%;
          height: 100%;
        }
        div{
          position: absolute;
          bottom: 0px;
          width: 100%;
          height: 1rem;
          background: rgba(0,0,0,0.3);
          padding: 10px;
          p{
            font-size: 0.3rem;
            color: #fff;
            &:last-child{
              margin-top: 10px;
              font-size: 0.2rem;
            }
          }
        }
      }
    }
  }
</style>
