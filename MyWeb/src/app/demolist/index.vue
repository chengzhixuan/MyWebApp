<template>
  <div class="demolist">
    <ul>
      <li v-for="items in demolist" @click="todemodetails(items.demolistid)">
        <el-carousel :interval="5000" arrow="always" height="200px" indicator-position="none">
          <el-carousel-item v-for="item in items.image" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
        <div class="demomes">
          <p>{{items.title}}</p>
          <p>
            <span>作者:{{items.author}}</span>
            <span>时间:{{items.time|filetime}}</span>
          </p>
          <p>{{items.content|stringsub}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '../../api'
  export default{
    data () {
      return {
        demolist: {}
      }
    },
    props: [],
    components: {},
    filters: {
      stringsub (value) {
        if (value.length > 20) {
          return value.substring(0, 20) + '...'
        }
        return value
      }
    },
    mounted () {
    },
    methods: {
      todemodetails (demoid) {
        console.log(demoid)
        this.$router.push('/demolist/demodetails/' + demoid)
      }
    },
    created () {
      api.demolist.getDemoList().then(res => {
        this.demolist = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .demolist{
    background: #f2f2f2;
    height: 100%;
    padding: 10px;
    overflow-y: auto;
    &>ul{
      margin: auto;
      &>li{
        position: relative;
        margin-bottom: 10px;
        box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.54);
        border-radius: 5px;
        .el-carousel{
          img{
            width: 100%;
            height: 100%;
          }
        }
        .demomes{
          position: absolute;
          z-index: 3;
          height: 1.1rem;
          width: 100%;
          padding: 5px 0px;
          font-size: 0.3rem;
          bottom: 0px;
          background: rgba(0, 0, 0, 0.32);
          color: #fff;
          p{
            padding: 0px 5px;
            span{
              font-size: 0.25rem;
            }
            &:last-child{
              font-size: 0.2rem;
            }
          }
        }
      }
    }
  }
</style>
