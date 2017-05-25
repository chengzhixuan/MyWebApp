<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "./assets/style/style.css";
  @import "//at.alicdn.com/t/font_mzfful9y60cc8fr.css";
  @import "./assets/style/quillcss.css";
  #app {
    height: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: column nowrap;
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
</style>
