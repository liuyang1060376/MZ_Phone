<template>
  <div>
    <div class="login-nav">
        <span class="icon iconfont" @click="$router.back()">&#xec5b;</span>
        <h2 v-if="$route.path.includes('/login')">民众体检登录</h2>
        <h2 v-else="$route.path.includes('/login')">快速注册</h2>
    </div>
  </div>
</template>

<script>
export default {
name: "LoginNav"
}
</script>

<style lang="less">
@import "../../assets/css/BaseFont";
  .login-nav{
    position: relative;
    width: 100%;
    height: 57rem / @baseFont;
    line-height: 57rem / @baseFont;
    background-color: #fff;
    text-align: center;
    h2{
      font-size: 30rem / @baseFont;
    }
    span{
      font-size: 30rem / @baseFont;
      position: absolute;
      left: 22rem / @baseFont;
      top: 0;
      cursor: pointer;
    }
  }
</style>
