<template>
  <div>
    <div class="hot">
      <ul>
        <li>
          <h3>天天低价</h3>
          <ul>
            <li>
              <img src="https://ikapp.oss-cn-beijing.aliyuncs.com/2020/11/23/2011231557537030.jpg" alt="">
              <h4>$1418</h4>
            </li>      <li>
              <img src="https://ikapp.oss-cn-beijing.aliyuncs.com/2020/11/23/2011231557537030.jpg" alt="">
              <h4>$1418</h4>
            </li>
          </ul>
        </li>
        <li>
          <img src="https://ikapp-image.health.ikang.com/2020/11/18/202011180919592700.png?459-501" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hot"
}
</script>

<style lang="less">
@import "../../assets/css/BaseFont.less";
  .hot {
    margin: 0 auto;
    width: 90%;
    height: 228rem/ @baseFont;
    background-color: #fff;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      li{
        width: 50%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
        }
        h3{
          width: 100%;
          height: 57rem / @baseFont;
          font-size: 29rem / @baseFont;
        }
        ul{
          height: 171rem / @baseFont;
          display: flex;
          justify-content: space-around;
          li{
            width: 50%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
              width: 115rem / @baseFont;
              height: 115rem/ @baseFont;
            }
          }
        }
      }

    }
  }
</style>
