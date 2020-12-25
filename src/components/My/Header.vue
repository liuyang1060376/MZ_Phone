<template>
  <div>
    <div class="header">
      <div class="title">
          个人中心
        <span></span>
      </div>
      <div class="user_info">
        <div class="avatar">
          <img src="https://image.suning.cn/uimg/cmf/cust_headpic/0000000000_01_240x240.jpg" alt="">
        </div>
        <div class="user_mobile">
          <h3>177*****21</h3>
          <span>健康值<i>254</i></span>
        </div>
        <div class="member_ewm">
          <a href=""></a>
        </div>
      </div>
      <ul class="tab_bar">
        <li>
          <span>0</span>
          <span>优惠券</span>
        </li>
        <li>
          <span>0</span>
          <span>优惠券</span>
        </li><li>
        <span>0</span>
        <span>优惠券</span>
      </li><li>
        <span>0</span>
        <span>优惠券</span>
      </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="less">
@import "./../../assets/css/BaseFont";
  .header {
    height: 340rem / @baseFont;
    background-color: #FFDB47;
    overflow: hidden;
    .title{
      position: relative;
      height: 38rem / @baseFont;
      line-height: 38rem / @baseFont;
      margin-top: 10rem / @baseFont;
      font-size: 25rem / @baseFont;
      text-align: center;
      span{
        position: absolute;
        right: 10rem/ @baseFont;
        top: 0;
        width: 30rem / @baseFont;
        height: 30rem / @baseFont;
        background: url("https://res.suning.cn/project/msinode/wap/home/image/setting.png") no-repeat;
        background-size: 30rem / @baseFont 30rem / @baseFont;
      }
    }
    .user_info{
      position: relative;
      width: 549rem / @baseFont;
      height: 110rem / @baseFont;
      margin: 25rem / @baseFont auto;
      display: flex;
      align-items: center;
      .avatar {
        display: flex;
        align-items: center;
        img{
          width: 84rem / @baseFont;
          height: 84rem / @baseFont;
          border-radius: 50%;
        }
      }
      .user_mobile{
        display: flex;
        margin-left: 7px;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        h3{
          font-size: 20rem / @baseFont;
        }
        span {
          display: inline-block;
          height: 20rem / @baseFont;
          line-height: 20rem / @baseFont;
          font-size: 12rem / @baseFont;
          color: #fff;
          background-color: rgba(0,0,0,0.5);
          border-radius: 5px;
        }
      }
      .member_ewm {
        width: 86rem / @baseFont;
        height: 86rem / @baseFont;
        position: absolute;
        right: 0;
        top: 9rem / @baseFont;
        a{
          display: block;
          width: 100%;
          height: 100%;
          background: url("https://res.suning.cn/project/msinode/wap/home/image/qr-icon.png") no-repeat;
          background-size: contain;
        }
      }
    }
    .tab_bar{
      height: 126rem / @baseFont;
      display: flex;
      justify-content: space-around;
      li{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        span{
          height: 32rem / @baseFont;
          line-height: 32rem / @baseFont;
        }
      }
    }
  }
</style>
