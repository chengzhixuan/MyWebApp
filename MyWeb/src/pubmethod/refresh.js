/**
 * Created by gupo-03 on 2017/3/22.
 * getRefresh:下拉刷新，上拉加载
 * 调用方法 this.PubMethod.refresh.getScrollTop(el, this, 调用的方法)
 * 调用本方法的组件data中要定义scollpage: 1(当前页数),scollsite: 'top'(之前的滚动条定位在哪里)
 *
 * getTop:下拉刷新
 * 调用本方法的组件data中要定义scollsite: 'top'(之前的滚动条定位在哪里)
 * 调用方法 this.PubMethod.refresh.getScrollTop(el, this, string(父组件中触发的方法名))
 */
const refresh = {
  getRefresh (el, thi, reload) {
    el.addEventListener('touchend', function () {
      var top = el.scrollTop
      var totalScroll = el.scrollHeight
      var currentScroll = top + el.offsetHeight
      if (top === 0) {
        if (thi.scollsite === 'top') {
          if (thi.scollpage > 1) {
            thi.scollpage -= 1
          }
          reload()
        }
        thi.scollsite = 'top'
      } else if (currentScroll >= totalScroll) {
        if (thi.scollsite === 'bottom') {
          thi.scollpage += 1
          reload()
        } else {
          thi.scollsite = 'bottom'
        }
      } else {
        thi.scollsite = 'center'
      }
    })
  },
  getTop (el, thi, reload) {
    el.addEventListener('touchend', function () {
      var top = el.scrollTop
      if (top === 0) {
        if (thi.scollsite === 'top') {
          thi.$emit(reload)
        }
        thi.scollsite = 'top'
      } else {
        thi.scollsite = 'center'
      }
    })
  }
}
export default refresh
