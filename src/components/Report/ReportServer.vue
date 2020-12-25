<template>
  <div>
    <ul class="section_list">
      <li>
        <a href="">
          报告解读
        </a>
      </li><li>
      <a href="">
        报告解读
      </a>
    </li><li>
      <a href="">
        报告解读
      </a>
    </li><li>
      <a href="">
        报告解读
      </a>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ReportServer"
}
</script>

<style lang="less">
@import "./../../assets/css/BaseFont";
.section_list{
  margin-top: 20px;
  width: 100%;
  height: 144rem / @baseFont;
  display: flex;
  justify-content: space-around;
  text-align: center;
  a{
    display: inline-block;
    width: 100rem / @baseFont;
    height: 104rem / @baseFont;
    padding-top: 60rem / @baseFont;
    background: url("data:image/png;base64,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")
    no-repeat 0 0 ;
    -webkit-background-size: 67rem / @baseFont 46rem / @baseFont ;
    background-size: 64rem / @baseFont 64rem / @baseFont ;
    background-position: 20rem / @baseFont 0;
  }
}
</style>
