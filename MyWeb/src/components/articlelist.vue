<template>
  <div class="articlelist">
    <transition name="show">
      <el-tree v-show="listshow" :data="data" :default-expand-all="true" :props="defaultProps" @node-click="handleNodeClick">
      </el-tree>
    </transition>
    <transition name="show1">
      <div class="hidd-show show1" v-show="!listshow">
        <i class="iconfont icon-sidebarshow" @click="listshow = !listshow"></i>
      </div>
    </transition>
    <transition name="show2">
      <div class="hidd-show" v-show="listshow">
        <i class="iconfont icon-sidebarhidd-copy" @click="listshow = !listshow"></i>
      </div>
    </transition>
  </div>
</template>

<script>
  import api from '../api'
  import * as actionType from '../store/action-type'
  export default{
    data () {
      return {
        data: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        listshow: false
      }
    },
    props: ['title'],
    components: {},
    filters: {},
    watch: {
      data () {
        this.handleNodeClick({id: this.data[0].id})
      }
    },
    mounted () {
    },
    methods: {
      listhidd () {
        this.listshow = false
      },
      handleNodeClick (value1) {
        this.listshow = false
        let id = value1.id
        this.$store.dispatch(actionType.ARTICLE_ARTICLEIDS, id)
      }
    },
    created () {
      api.article.getCourseList(this.title).then(res => {
        this.data = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .show-enter-active {
    transition: all .5s ease;
  }
  .show-enter{
    transform: translateX(-300px);
    opacity: 0;
  }
  .show-leave-active {
    transition: all .5s ease;
    transform: translateX(-300px);
    opacity: 0;
  }
  .show-leave{
    transform: translateX(0px);
  }

  .show1-enter-active {
    transition: all .5s ease;
    opacity: 0;
  }
  .show1-enter{
    transform: translateX(-300px);
    opacity: 0;
  }
  .show1-leave-active {
    transition: all 0s ease;
    opacity: 0;
  }
  .show1-leave{
    opacity: 0;
  }

  .show2-enter-active {
    transition: all 0.5s ease;
    transform: translateX(0px);
    opacity: 1;
  }
  .show2-enter{
    transform: translateX(-300px);
    opacity: 0;
  }
  .show2-leave-active {
    transition: all .5s ease;
    transform: translateX(-300px);
    opacity: 0;
  }
  .show2-leave{
    transform: translateX(0px);
  }
  .articlelist{
    position: absolute;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .el-tree{
      width: 3rem;
      height: 100%;
      overflow: auto;
    }
    .hidd-show{
      height: 100%;
      min-width: 0.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-flex-flow: column nowrap;
      flex-flow: column nowrap;
      background: rgba(242, 242, 242, 0.5);
      &.show1{
        left: 0;
      }
      i{
        font-size: 0.2rem;
        color: #333;
      }
    }
  }
</style>
