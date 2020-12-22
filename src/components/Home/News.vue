<template>
  <div>
    <dl class="news">
      <dt><h3>健康资讯</h3><a href="">查看更多<span class="icon iconfont">&#xe60e;</span></a></dt>
      <dd>
        <div class="content">
          <h3>标题发表的基本简介</h3>
          <p>2020-12-18</p>
        </div>
        <img src="https://static-cmsnew.health.ikang.com/data/upload/picture/20201215/1607997077165429.png" alt="">
      </dd>
      <dd>
        <div class="content">
          <h3>标题发表的基本简介</h3>
          <p>2020-12-18</p>
        </div>
        <img src="https://static-cmsnew.health.ikang.com/data/upload/picture/20201215/1607997077165429.png" alt="">
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
name: "News"
}
</script>

<style lang="less">
@import "../../assets/css/BaseFont";
  .news {
    margin: 0 auto;
    width: 90%;
    height: 235rem / @baseFont;
    dt {
      height: 29rem / @baseFont;
      line-height: 29rem / @baseFont;

      h3 {
        float: left;
        height: 100%;
        font-size: 19rem / @baseFont;
      }
      a{
        float: right;
        height: 100%;
      }
    }
    dd{
      width: 100%;
      height: 100rem / @baseFont;
      border-bottom: 1px solid #c4c2c0;
      .content{
        float: left;
        width: 440rem / @baseFont;
        height: 100%;
        h3 {
          font-size: 16rem / @baseFont;
          color: #2a2827;
        }
        p{
          font-size: 10rem / @baseFont;
          color: #c4c2c0;
        }
      }
      img{
        float: right;
        height: 70rem / @baseFont;
        width: 90rem / @baseFont;
        vertical-align: middle;
        margin-top: 15rem / @baseFont;
      }
    }
  }
</style>
