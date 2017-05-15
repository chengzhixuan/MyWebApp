<template>
  <header>
    <div class="headertop">
      <i class="iconfont icon-shouye-shouye" @click="indexs"></i>
      <span class="" @click="listshow">
        {{nownav}}<i class="iconfont icon-liebiao"></i>
      </span>
      <i class="iconfont icon-man" @click="user"></i>
    </div>
    <div class="headerbuttom">
      <ul v-show="ulshow">
        <li v-for="(item,index) in navlist" :key="index" @click.capture="articlename(item.title,item.name)">{{item.name}}</li>
      </ul>
    </div>
  </header>
</template>

<script>
//  import api from '../api'
  const NAVLI = [
    {name: '教程', title: 'course'},
    {name: '小项目', title: 'demolist'},
    {name: '个人笔记', title: 'notes'},
    {name: '随笔', title: 'informalessay'},
    {name: '留言板', title: 'leaveword'}]
  export default{
    data () {
      return {
        navlist: [],
        nownav: '',
        ulshow: false
      }
    },
    props: [],
    components: {},
    filters: {},
    computed () {

    },
    watch: {
      '$route': 'pathchange'
    },
    mounted () {
    },
    methods: {
      pathchange () {
        let path = this.$route.fullPath
        for (let i = 0; i < NAVLI.length; i++) {
          if (path.split('?')[0] === '/' + NAVLI[i].title) {
            this.nownav = NAVLI[i].name
            break
          }
        }
      },
      user () {
        this.nownav = '个人中心'
        this.listhidd()
      },
      indexs () {
        this.nownav = '首页'
        this.listhidd()
        this.$router.push('/')
      },
      articlename (value, value2) {
        this.nownav = value2
        this.listhidd()
        this.$router.push('/' + value)
      },
      listhidd () {
        this.ulshow = false
      },
      listshow () {
        this.ulshow = !this.ulshow
      }
    },
    created () {
      this.navlist = NAVLI
      this.nownav = '首页'
      this.pathchange()
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  header{
    color: #fff;
    font-weight: 400;
    min-height: 8.2%;
    position: relative;
    .headertop{
      width: 100%;
      display: flex;
      font-size: 0.4rem;
      background: #0593d3;
      justify-content: space-around;
      padding: 10px 0px;
      .iconfont{
        font-size:0.5rem;
      }
      span{
        display: block;
        text-align: center;
      }
    }
    .headerbuttom{
      width: 100%;
      position: absolute;
      z-index: 5;
      ul{
        width: 60%;
        color: rgba(0,0,0,0.7);
        font-size: 0.25rem;
        text-align: center;
        margin: 5px auto;
        z-index: 2;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 5px;
        background: #fff;
        li{
          text-align: left;
          padding: 5px 10px;
        }
      }
    }
  }

</style>
