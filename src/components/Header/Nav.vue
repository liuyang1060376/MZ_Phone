<template>
  <div>
    <div class="nav">
      <div class="bg">
        <img class="topbg" :src="topbg" alt="">
        <img class="bottombg" :src="bottombg" alt="">
      </div>
      <a class="address" href="">广德市 <span class="icon iconfont">&#xe60a;</span></a>
      <div class="search"><input type="text" placeholder="1188套餐/688"><span class="search-icon icon iconfont">&#xe6b9;</span></div>
      <a class="login icon iconfont" href="">&#xe63f;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data(){
    return{
      topbg:require('./../../../static/image/header/bgtop.png'),
      bottombg:require('./../../../static/image/header/bgbottom.png')
    }
  },
}
</script>

<style lang="less">
  @import "./../../assets/css/BaseFont.less";
  .nav{
    height: 63rem / @baseFont;
    display: flex;
    justify-content: space-between;
    vertical-align: bottom;
    text-align: center;
    line-height: 63rem /@baseFont;
    position: relative;
    margin-bottom: 20rem / @baseFont;
    z-index: 1;
    .bg{
      width: 100%;
      height: auto;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -100;
      .bottombg{
        vertical-align: bottom;
        width: 100%;
        height: 200rem /@baseFont;
      }
      .topbg{
        vertical-align: top;
        width: 100%;
        height: 100rem /@baseFont;
      }
    }
    .address{
      display: block;
      width: 100rem /@baseFont;
    }
    a{
      color: #fff;
    }
    .search{
      flex: 1;
      box-sizing: border-box;
      position: relative;
      input{
        padding: 0 28rem / @baseFont;
        width: 100%;
        height: 32rem /@baseFont;
        box-sizing: border-box;
        border: 0;
        border-radius: 25rem / @baseFont;
      }
      .search-icon{
        font-size: 16rem / @baseFont;
        position: absolute;
        left: 9rem / @baseFont;
        top: 1rem /@baseFont;
      }
    }
    .login{
      display: block;
      width: 24rem/@baseFont;
      margin: 0 15rem/@baseFont;
      font-size: 24rem /@baseFont;
    }


  }
</style>
