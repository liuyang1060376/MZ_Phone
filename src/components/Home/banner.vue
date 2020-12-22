<!--广告-->
<template>
    <div>
      <div class="banner"><img src="https://ikapp-image.health.ikang.com/2020/09/28/202009281630123820.png?234-1029!/fw/750/format/webp" alt=""></div>
    </div>
</template>

<script>
export default {
  name: "banner"
}
</script>

<style lang="less">
@import "../../assets/css/BaseFont";
  .banner{
    margin: 10rem/ @baseFont auto;
    width: 90%;
    height: 127rem / @baseFont;
    border-radius: 10rem / @baseFont;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
