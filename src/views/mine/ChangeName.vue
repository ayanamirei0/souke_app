<template>
    <div class="ChangeName">
        <div class="top">
            <i class="iconfont icon-fanhui" @click="$router.go(-1)"></i>
            <p>修改学院信息</p>
        </div>
        <div class="main">
            <p class="top_tip">为了让老师更好的了解你，请输入真是姓名</p>
            <div class="input">
                <input type="text" placeholder="请输入学院姓名">
            </div>
            <p class="btn">提交</p>
            <p>注意：学院姓名一个月只可修改一次</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
      return {

      }
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
.ChangeName{
    .top{
        position: relative;
        margin-top: 1.25rem;
        border-bottom: 1px solid #ECECEE;
        .icon-fanhui{
            position: absolute;
            top: .15rem;
            left: 1%;
            font-size: 1.1rem;
            color: #333333;
        }
        P{
            font-size: .9rem;
            color: #333333;
            margin-bottom: .6rem;
            text-align: center;
        }
    }
    .main{
        p{
            color: #666666;
            font-size: .6rem;
            text-align: center;
        }
        .top_tip{
            margin: .8rem 0 .7rem 0;
        }
        .input{
            input{
                box-shadow: inset 0 0 10px #CCC;
                padding: .725rem 0 .625rem 3%;
                width: 97%;
            }
            input::-webkit-input-placeholder{
                color: #999999;
                font-size: .7rem;
            }
        }
        .btn{
            width: 15.6rem;
            height: 2rem;
            border-radius: 1rem;
            background-color: #2FB3F1;
            color: #ffffff;
            font-size: .8rem;
            margin: 1.35rem auto .6rem auto;
            line-height: 2rem;
            text-align: center;
        }
    }
}
</style>


