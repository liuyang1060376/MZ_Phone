<template>
  <div>
    <div class="reg">
      <LoginNav />
      <ul>
        <li :class="{'style-block':this.status>=1}">①输入手机号码</li>
        <li :class="{'style-block':this.status>=2}">②输入验证码</li>
        <li :class="{'style-block':this.status>=3}">③设置密码</li>
      </ul>
      <input v-if="status===1" class="mibble" type="tel" placeholder="请输入手机号" >
      <div v-if="status===2" class="code-box">
        <input  type="text" placeholder="请输入验证码">
        <a href="">获取验证码</a>
      </div>
      <input v-if="status===3" class="mibble" type="password" placeholder="请输入密码" >
      <a class="next" @click="next">{{statusText}}</a>
    </div>
  </div>
</template>

<script>
import LoginNav from "../../components/Login/LoginNav";
export default {
  name: "Register",
  data(){
    return{
      //执行状态 1第一步，2第二部，3立即注册
      status:1,
      statusText:'下一步'
    }
  },
  methods:{
    next(){
      this.status+=1
      this.statusText='立即注册'
    }
  },
  components:{LoginNav}
}
</script>

<style lang="less">
@import "./../../assets/css/BaseFont";
  .style-block{
      color: black !important;
  }
  .reg{
    width: 100%;
    text-align: center;
    ul{
      display: flex;
      justify-content: space-around;
      text-align: center;
      li{
        height: 66rem / @baseFont;
        line-height: 66rem / @baseFont;
        flex: 1;
        color:  #eaeaea;
      }
    }
    .mibble{
      display: block;
      margin: 30rem / @baseFont 0;
      height: 66rem / @baseFont;
      line-height: 66rem / @baseFont;
      width: 100%;
      border-left: 0;
      border-right: 0;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding-left: 20px;
    }
    .code-box{
      display: flex;
      justify-content: space-between;
      margin: 30rem / @baseFont 0;
      height: 66rem / @baseFont;
      line-height: 66rem / @baseFont;
      border-left: 0;
      border-right: 0;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      padding-left: 20px;
      input{
        flex: 1;
        border: none;
      }
      a{
        display: block;
        width: 130rem / @baseFont;
        height: 100%;
      }
    }
    .next{
      display: block;
      margin: 0 auto;
      width: 90%;
      height: 70rem / @baseFont;
      line-height: 70rem / @baseFont;
      border-radius: 20px;
      background-color: #348903;
      color: #fff;
      text-align: center;
    }
  }
</style>
