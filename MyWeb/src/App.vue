<template>
  <div id="app">
    <MyHeader></MyHeader>
    <router-view></router-view>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import "./assets/style/style.css";
  @import "//at.alicdn.com/t/font_vwg53dl74oadzpvi.css";
  #app {
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>
