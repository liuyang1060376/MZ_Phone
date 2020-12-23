<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for='(item,index) in BannerList'
          class="swiper-slide"><img :src="item.ImageAddress" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import {mapState} from 'vuex'
export default {
name: "Slider",
  created() {

  },
  computed:{
    ...mapState(['BannerList'])
  },
  mounted() {
    this.$store.dispatch('reqBannerList',function () {
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: true,//可选选项，自动滑动
        delay:2000
      })
    })

    console.log(this.$store.state.BannerList)

  },
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
