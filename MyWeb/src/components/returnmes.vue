<template>
  <div class="returnmes">
    <p>添加评论</p>
    <div v-show="addshow" @click="returnshow" class="clickreturn">
      <el-button type="primary"><i class="iconfont icon-message"></i>发表评论</el-button>
    </div>
    <div v-show="!addshow" class="addreturn">
      <el-input v-model="returntitle" :minlength="5" placeholder="请输入标题"></el-input>
      <div class="returntitle">
      </div>
      <div class="toolbar">
      </div>
      <div class="writereply">
      </div>
      <div class="submit">
        <el-button @click="submit" type="primary"><i class="iconfont icon-zhengquewancheng"></i>确定</el-button>
        <el-button @click="close"><i class="iconfont icon-cuowuguanbiquxiao"></i>取消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Quill from 'quill'
  export default{
    data () {
      return {
        returntitle: '',
        addshow: true,
        quill: {},
        returnhtml: ''
      }
    },
    props: [],
    components: {},
    filters: {},
    mounted () {
      let id = document.querySelector('.writereply')
      this.quill = new Quill(id, {
        debug: 'info',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['image', 'code-block'],
            [{'list': 'ordered'}, { 'list': 'bullet' }]
          ]
        },
        placeholder: '输入你的评论信息',
        theme: 'snow'
      })
    },
    methods: {
      submit () {
        this.returnhtml = document.querySelector('.writereply.ql-container.ql-snow').cloneNode(true)
        let str = document.createElement('div')
        str.appendChild(this.returnhtml)
        console.log(str.innerHTML)
      },
      returnshow () {
        this.addshow = false
      },
      close () {
        this.addshow = true
      }
    },
    created () {
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .returnmes{
    width: 90%;
    margin: auto;
    margin-bottom: 20px;
    >p{
      font-size: 0.4rem;
      margin-top: 0.5rem;
      border-bottom: 1px solid #f2f2f2;
      padding-left: 10px;
    }
    .clickreturn{
      margin: 10px 0px;
    }
    .addreturn{
      .el-input{
        margin: 10px 0px;
      }
      .writereply{
        min-height: 200px;
        margin-bottom: 10px;
      }
      .submit{
        display: flex;
        justify-content: space-around;
        .el-button{
          width: 33%;
        }
      }
    }
  }
</style>
