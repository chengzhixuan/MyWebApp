<template>
  <div class="discuss">
    <p>评论</p>
    <ul class="discusslist">
      <li v-for="items in reply" :key="items.replyid">
        <div class="landlord">
          <div class="avatar">
            <img :src="items.image">
          </div>
          <div class="landlordcon">
            <p>{{items.title}}</p>
            <p>
              <span>{{items.name}}</span>
              <span>Created {{items.createtime|filetime}},</span>
              <span>Last updated {{items.updatetime|filetime}}</span>
            </p>
            <p>{{items.content}}</p>
          </div>
        </div>
        <ul class="returnlist">
          <li v-for="item in items.topicreply" :key="item.topicreplyid">
            <div class="landlord">
              <div class="avatar">
                <img :src="item.image">
              </div>
              <div class="landlordcon">
                <p>
                  <span>{{item.name}}</span>
                  <span>Created {{item.createtime|filetime}}</span>
                </p>
                <p>{{item.content}}</p>
              </div>
            </div>
          </li>
        </ul>
        <div class="returnbuttom">
          <el-button :plain="true" type="primary"><i class="iconfont icon-liebiao"></i>View Discuss</el-button>
          <el-button :plain="true" type="primary"><i class="iconfont icon-reply"></i>Reply Topic</el-button>
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
    props: ['reply'],
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
      padding-left: 10px;
    }
    .discusslist{
      padding-bottom: 20px;
      &>li{
        width: 100%;
        &>.landlord{
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
        &>.returnlist{
          width: 80%;
          margin: auto;
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
        &>.returnbuttom{
          text-align: center;
          border-bottom: 1px solid #f2f2f2;
          .el-button{
            padding: 5px 15px;
          }
        }
      }
    }
  }
</style>
