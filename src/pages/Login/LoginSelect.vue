<template>
  <div>
    <Nav />
    <div class="LoginSelect">
      <div class="logo"><img src="http://www.mztj.cn/images/logo.jpg" alt=""></div>
      <h4>选择登录方式</h4>
      <router-link tag="a" to="/login">手机登录</router-link>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/Login/LoginNav";
export default {
  name: "LoginSelect",
  components:{Nav}
}
</script>

<style lang="less">
@import "./../../assets/css/BaseFont";
.LoginSelect{
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 50px;
  width: 100%;
  height: 100%;
  z-index: 100;
  text-align: center;
  .logo{
    width: 100%;
    margin: 180rem / @baseFont 0;

    img{
      width: 200rem / @baseFont;
    }

  }
  h4{
    margin: 50rem/ @baseFont 0;
    font-size: 15rem / @baseFont;
  }
  a{
    display: inline-block;
    width: 70%;
    font-size: 20rem / @baseFont;
    background-color: #348903;
    height: 45rem / @baseFont;
    line-height: 38rem / @baseFont;
    outline: none;
    color: #fff;
    cursor: pointer;
  }
}
</style>
