<template>
  <div>
    <dl class="ai-list">
      <dt><h3>mzHealth-AI+有人管的体检</h3><a href="">查看更多<span class="icon iconfont">&#xe60e;</span></a></dt>
      <dd>
        <a href="">报告解读</a>
        <a href="">AI健康筛查</a>
        <a href="">绿色就医</a>
        <a href="">二次分诊</a>
        <a href="">阳性追踪</a>
        <a href="">团检分析</a>
      </dd>
    </dl>

  </div>
</template>

<script>
export default {
  name: "Service-List"
}
</script>

<style lang="less">
@import "../../assets/css/BaseFont";
.ai-list{
  width: 90%;
  margin: 20rem / @baseFont auto;
  text-align: center;
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
  dd {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a{
      width: 180rem / @baseFont;
      height: 58rem / @baseFont;
      line-height: 58rem / @baseFont;
    }
  }
}

</style>
