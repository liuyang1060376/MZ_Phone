<template>
  <div>
      <Nav />
    <div class="login_type" >
      <ul>
        <li @click="switchLogin('1')">手机快速登录 <i v-if="loginType===1" ></i></li>
        <li @click="switchLogin('2')">用户密码登录 <i v-if="loginType===2"></i></li>
      </ul>
    </div>
    <!--验证码登录-->
    <form v-if="loginType===1">
      <div class="mibble">
        <label><span>+86</span><i class="icon iconfont">&#xe60a;</i></label>
        <input type="number"  placeholder="请输入手机号" v-model="mobile">
      </div>
      <div class="code">
        <input type="text" placeholder="请输入收到的验证码" v-model="code" >
        <a v-if="!timer1" href="" @click.prevent="getCode(mobile)">获取验证码</a>

        <a class="disenable" v-else href="" @click.prevent="getCode(mobile)">已发送{{ timer1 }}s</a>
      </div>
      <a class="login_btn" href="" @click.prevent="loginTo(mobile,pwd,loginType,code)">登录</a>
    </form>
    <form v-else action="">
      <div class="mibble">
        <input type="number"  placeholder="请输入手机号" v-model="mobile">
      </div>
      <div class="pwd">
        <input type="password" placeholder="请输入密码" v-model="pwd">
        <span class="icon iconfont">&#xe704;</span>
        <a href="">忘记密码</a>
      </div>
      <a class="login_btn" @click.prevent="loginTo(this.mobile,this.pwd,this.loginType,this.code)" href="">登录</a>
    </form>
    <a class="register" @click="linkTo">立即注册</a>
  </div>

</template>

<script>
import Nav from "../../components/Login/LoginNav";
import {getCode,login} from "../../api/api";

export default {
  name: "Login",
  data(){
    return{
      loginType:1,
      mobile:'',
      timer1:0,  //验证码倒计时
      pwd:'',
      code:''
    }
  },
  computed: {
    // 验证手机号是否合理
    phoneRight() {
      return /^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.mobile)
    }
  },
  methods:{
    //切换登录方式
    switchLogin(type){
      if(type==='1'){
        this.loginType=1
      }else{
        this.loginType=2
      }
    },
    // 跳转到注册页面
    linkTo(){
      this.$router.replace('/register')
    },
    //登录
    async loginTo(mobile,pwd,type,code){
      console.log(mobile,pwd,type,code)
      let result=await login(mobile,pwd,type,code)
      if(result.code===200){
        this.$router.back();
      }else{
        console.log(result)
      }
    },

    //获取验证码
    async getCode(mobile){
      if(this.phoneRight){
        let that = this
        that.timer1=60
        let result = await getCode(mobile)
        if (result.code===200){
          alert('发送成功')
        }else{
          alert('发送失败')
        }
        that.timer=setInterval(function () {
          that.timer1-=1
          if(that.timer1===0){
            clearInterval(that.timer)
            that.timer1=0
          }
        },1000)
      }else{
        alert('手机号码错误')
      }


    }
  },
  components:{Nav},
}
</script>

<style lang="less">
@import "../../assets/css/BaseFont";
  .login_type{
    height: 66rem / @baseFont;
    line-height: 66rem / @baseFont;
    font-size: 17rem / @baseFont;
    background-color: #fafcfb;
    text-align: center;
    margin-bottom: 30rem / @baseFont;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      li{
        flex: 1;
        position: relative;
        i{
          display: inline-block;
          width: 45rem / @baseFont;
          height: 2px;
          background-color: #348903;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%);
        }
      }
    }
  }
  form{
    width: 90%;
    margin: 0  auto;
    text-align: center;
    .mibble{
      margin-bottom: 30rem / @baseFont;
      height: 76rem / @baseFont;
      line-height: 76rem / @baseFont;
      font-size: 22rem / @baseFont;
      border-bottom: 1px solid #ccc;
      text-align: left;
      i{
        font-size: 12rem / @baseFont;
        padding: 0 5rem / @baseFont;
      }
      input{
        width: 400rem / @baseFont;
        height: 80%;
        border: 0;
      }
    }
    .code,.pwd {
      height: 76rem / @baseFont;
      line-height: 76rem / @baseFont;
      font-size: 22rem / @baseFont;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20rem / @baseFont;
      input {
        flex: 1;
        height: 100%;
        box-sizing: border-box;
        border: 0;
      }
      a {
        width: 151rem / @baseFont;
        height:50rem / @baseFont ;
        line-height:50rem / @baseFont ;
        margin-top: 10rem / @baseFont;
        padding: 0 20rem / @baseFont;
        box-sizing: border-box;
        border-left: 1px solid #ccc;
        font-size: 14rem / @baseFont;
      }
      .disenable{
        pointer-events: none;
        cursor: default;
        color: gray;
      }
    }
    .pwd {
      a {
        width: 151rem / @baseFont;
        height:50rem / @baseFont ;
        line-height:50rem / @baseFont ;
        margin-top: 10rem / @baseFont;
        padding: 0 20rem / @baseFont;
        box-sizing: border-box;
        border-left: 1px solid #ccc;
        font-size: 14rem / @baseFont;
      }
      span {
        width: 80rem / @baseFont;
        height: 100%;
        color: #ccc;
        cursor: pointer;
      }
    }
    .login_btn {
      display: inline-block;
      width: 100%;
      height: 75rem / @baseFont;
      line-height: 75rem / @baseFont;
      background-color: #348903;
      color: #fff;
      font-size: 25rem / @baseFont;
      text-align: center;
      border-radius: 40px;
    }
  }
  .register{
    width: 100%;
    height: 50rem / @baseFont;
    position: absolute;
    bottom: 120px;
    text-align: center;
  }
</style>
