<template>
    <div>
        <div class="tabbar-box">
          <ul>
            <li><a @click.prevent="switchTo('/home')" :class="{on:$route.path.includes('/home')}" href=""><img :src="$route.path.includes('/home') ? tabBarImgArr[0].selected : tabBarImgArr[0].normal" alt=""><span>首页</span></a></li>
            <li><a @click.prevent="switchTo('/category')" :class="{on:$route.path.includes('/category')}" href=""><img :src="$route.path.includes('/category') ? tabBarImgArr[1].selected : tabBarImgArr[1].normal" alt=""><span>套餐</span></a></li>
            <li><a @click.prevent="switchTo('/report')" :class="{on:$route.path.includes('/report')}" href=""><img :src="$route.path.includes('/report') ? tabBarImgArr[2].selected : tabBarImgArr[2].normal" alt=""><span>报告</span></a></li>
            <li><a @click.prevent="switchTo('/my')" :class="{on:$route.path.includes('/my')}" href=""><img :src="$route.path.includes('/my') ? tabBarImgArr[3].selected : tabBarImgArr[3].normal" alt=""><span>我的</span></a></li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "TabBar",
  data(){
    return {
      //tabBar图片
      tabBarImgArr:[
        {normal: require('./../../../static/image/tabbar/home.png'),selected:require('./../../../static/image/tabbar/homese.png')},
        {normal: require('./../../../static/image/tabbar/category.png'),selected: require('./../../../static/image/tabbar/categoryse.png')},
        {normal: require('./../../../static/image/tabbar/report.png'),selected: require('./../../../static/image/tabbar/reportse.png')},
        {normal: require('./../../../static/image/tabbar/my.png') , selected: require('./../../../static/image/tabbar/myse.png')}
      ]
    }
  },

  methods:{
    switchTo(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="less">
  @import "./../../assets/css/BaseFont.less";
  .tabbar-box {
    position: fixed;
    left: 50%;
    transform: translate(-50%);
    bottom: 0;
    width: 15rem;
    height: 100rem / @baseFont;
    font-size: 20rem / @baseFont;
    text-align: center;
    background-color: #fff !important;
    border-top: 1px solid #ccc;
    ul {
      height: 100%;
      display: flex;
      justify-content: space-around;
      li {
        flex: 1;
        height: 100%;
        .on{
          color: #348903;
        }
        a {
          display: block;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #ccc;
          img {
            width: 60rem / @baseFont;
            height: 60rem / @baseFont;
          }
          span{
            flex: 1;
            align-items: center;
            line-height: 40rem / @baseFont;
            vertical-align: middle;
          }
        }
      }
    }
  }
</style>
