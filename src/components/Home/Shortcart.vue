<template>
  <div>
    <div class="short-cart">
      <ul>
        <li>
          <div>
            <img src="https://static-m-ali.tijianbao.com/static/media/kuaisuyuyue@2x.71901929.png" alt="">
          </div>
          <div>
              <h3>快速预约</h3>
              <p>体检/疫苗/疫苗</p>
          </div>
        </li>
        <li>
          <div>
            <img src="https://static-m-ali.tijianbao.com/static/media/kuaisuyuyue@2x.71901929.png" alt="">
          </div>
          <div>
            <h3>快速预约</h3>
            <p>体检/疫苗/疫苗</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "Shortcart"
}
</script>

<style lang="less">
@import "../../assets/css/BaseFont.less";
  .short-cart{
    height: 106rem /@baseFont;
    line-height: 106rem /@baseFont;
    margin-top: 10rem / @baseFont;
    padding: 0 27rem / @baseFont;
    ul{
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      li{
        width: 251rem / @baseFont;
        border-radius: 10rem / @baseFont;
        div{
          float: left;
          height: 100%;
          h3{
            width: 160rem / @baseFont;
            height: 24rem / @baseFont;
            line-height: 24rem / @baseFont;
            font-size: 22rem / @baseFont;
          }
          p{
            width: 160rem / @baseFont;
            height: 24rem / @baseFont;
            line-height: 24rem / @baseFont;
            margin-top: 2rem / @baseFont;
            font-size: 14rem / @baseFont;
          }
          img{
            width: 80rem / @baseFont;
            height: 80rem / @baseFont;
            vertical-align: middle;
          }
        }
        div:nth-child(2){
          position: relative;
          width: 160rem / @baseFont;
          top: 50%;
          margin-top: -23rem / @baseFont;
        }
      }
      li:nth-child(1){
        background-color: #eff9f8;
      }
      li:nth-child(2){
        background-color: #faf6f7;
      }
    }
  }
</style>
