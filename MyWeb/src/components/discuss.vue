<template>
  <div class="discuss">
    <p>评论</p>
    <ul class="discusslist">
      <li>
        <div class="landlord">
          <div class="avatar">
            <img src="../../static/timg.jpg">
          </div>
          <div class="landlordcon">
            <p>国家规定苦尽甘来肯德基放得开</p>
            <p>
              <span>程志轩</span>
              <span>Created 3-17 14:26,</span>
              <span>Last updated 3-17 14:26</span>
            </p>
            <p>国家规定苦尽甘来肯德基放得开国家规定苦尽甘来肯德基放得开国家规定苦尽甘来肯德基放得开国家规定苦尽甘来肯德基放得开</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'discuss',
    data () {
      return {}
    },
    props: [],
    components: {},
    filters: {},
    mounted () {
    },
    methods: {},
    created () {
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .discuss{
    >p{
      font-size: 0.4rem;
      margin-top: 0.5rem;
      border-bottom: 1px solid #f2f2f2;
    }
    .discusslist{
      >li{
        width: 100%;
        .landlord{
          display: flex;
          flex-direction: row;
          width: 90%;
          margin:auto;
          padding: 20px 0px;
          border-bottom: 1px solid #f2f2f2;
          .avatar{
            width: 1rem;
            min-width: 1rem;
            height: 1rem;
            min-height: 1rem;
            margin-right: 5px;
            img{
              width: 100%;
              height: 100%;
              border-radius: 50%;
            }
          }
          .landlordcon{
            p{
              &:first-child{
                font-size: 0.3rem;
                color: #0593d3;
              }
              &:nth-child(2){
                font-size: 0.1rem;
                margin: 10px 0px;
                span{
                  color: #ddd;
                  &:first-child{
                    color: #0593d3;
                  }
                }
              }
              &:last-child{
                font-size: 0.2rem;
                color: #a4a4a4;
              }
            }
          }
        }
      }
    }
  }
</style>
