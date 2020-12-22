<template>
  <div>
    <div class="enter-list">
      <ul>
        <li>
          <img src="https://image2.suning.cn/uimg/cms/img/160518006726907674.png" alt="">
          <span>苏宁秒杀</span>
        </li><li>
          <img src="https://image2.suning.cn/uimg/cms/img/158225094251284751.png" alt="">
          <span>苏宁秒杀</span>
        </li><li>
          <img src="https://image2.suning.cn/uimg/cms/img/158225098618947382.png" alt="">
          <span>苏宁秒杀</span>
        </li><li>
          <img src="https://image1.suning.cn/uimg/cms/img/159919108574328432.png" alt="">
          <span>苏宁秒杀</span>
        </li><li>
          <img src="https://image2.suning.cn/uimg/cms/img/158225106790473382.png" alt="">
          <span>苏宁秒杀</span>
        </li><li>
          <img src="https://image2.suning.cn/uimg/cms/img/160518006726907674.png" alt="">
          <span>苏宁秒杀</span>
        </li><li>
          <img src="https://image2.suning.cn/uimg/cms/img/160518006726907674.png" alt="">
          <span>苏宁秒杀</span>
        </li><li>
          <img src="https://image2.suning.cn/uimg/cms/img/160518006726907674.png" alt="">
          <span>苏宁秒杀</span>
        </li><li>
          <img src="https://image2.suning.cn/uimg/cms/img/160518006726907674.png" alt="">
          <span>苏宁秒杀</span>
        </li><li>
          <img src="https://image2.suning.cn/uimg/cms/img/160518006726907674.png" alt="">
          <span>苏宁秒杀</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "EnterList"
}
</script>

<style lang="less">
@import "../../assets/css/BaseFont";
  .enter-list{
    margin: 20rem / @baseFont auto;
    width: 90%;
    height: 210rem / @baseFont;
    background-color: #fff;
    ul{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
        width: 100rem / @baseFont;
        height: 105rem / @baseFont;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        img{
          width: 60rem / @baseFont;
          height: 60rem/ @baseFont;
        }
        span{
          display: block;
          height: 20rem / @baseFont;
          line-height: 20rem / @baseFont;
        }
      }
    }
  }
</style>
