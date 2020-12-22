<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="https://ikapp-image.health.ikang.com/2020/11/17/202011171356470310.jpg?432-1029!/fw/750/format/webp" alt=""></div>
        <div class="swiper-slide"><img src="https://ikapp-image.health.ikang.com/2020/09/27/202009271555262530.jpg?432-1029!/fw/750/format/webp" alt=""></div>
        <div class="swiper-slide"><img src="https://ikapp-image.health.ikang.com/2020/11/17/202011171356470310.jpg?432-1029!/fw/750/format/webp" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
name: "Slider",
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,//可选选项，自动滑动
      delay:2000
    })

//如果你初始化时没有定义Swiper实例，后面也可以通过Swiper的HTML元素来获取该实例
    new Swiper('.swiper-container')
    var mySwiper = document.querySelector('.swiper-container').swiper
    mySwiper.slideNext();
  }
}

</script>

<style lang="less">
  @import "../../assets/css/BaseFont.less";
  .swiper-container{
    width: 90%;
    height: 234rem / @baseFont;
    margin: 0 auto;
    border-radius: 30px;
    .swiper-wrapper{
      width: 574rem / @baseFont;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
