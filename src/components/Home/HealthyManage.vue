<template>
    <div>
      <div class="healthy-manage">
          <h3>
            健康管理
          </h3>
        <ul>
          <li><img src="https://ikapp-image.health.ikang.com/2020/11/18/202011180921270370.png?261-501" alt=""></li>
          <li><img src="https://ikapp-image.health.ikang.com/2020/11/18/202011180921386420.png?261-501" alt=""></li>
          <li><img src="https://ikapp-image.health.ikang.com/2020/11/18/202011180922242520.png?261-501" alt=""></li>
          <li><img src="https://ikapp-image.health.ikang.com/2020/11/18/202011180921498950.png?261-501" alt=""></li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "HealthyManage"
}
</script>

<style lang="less">
@import "../../assets/css/BaseFont";
  .healthy-manage{
    width: 90%;
    height: 360rem / @baseFont;
    background-color: #fff;
    margin: 20rem / @baseFont auto;
    h3 {
      font-size: 19rem / @baseFont;
    }
    ul{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
        width: 260rem / @baseFont;
        height: 146rem / @baseFont;
        margin-top: 6rem / @baseFont;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
