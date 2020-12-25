
//参考文档https://blog.csdn.net/m0_37903882/article/details/101554015
//解决无法显示中文 https://blog.csdn.net/w546097639/article/details/108472464
<template>
  <div>
    <pdf class="pdf_box"
      :src="pdfUrl"
      @num-pages="pageCount = $event"
      @page-loaded="currentPage = $event"
      :page="currentPage"
    ></pdf>
    <p class="arrow">
      <el-button type="primary" @click="changePdfPage(0)">上一页</el-button>
      {{currentPage}} / {{pageCount}}
      <el-button type="primary" @click="changePdfPage(1)">下一页</el-button>
    </p>
  </div>
</template>

<script>
import CMapReaderFactory from 'vue-pdf/src/CMapReaderFactory.js';



import pdf from 'vue-pdf'
export default {
  name: "Pdf",
  components: {
    pdf
  },
  data() {
    return {
      currentPage: 1,
      pageCount: '',
      src:"http://192.168.4.6:3000/public/1.pdf",
      pdfUrl:''
    }
  },
  created() {
    //解决无法加载中文以及刷新数据丢失
    console.log(this.pdfUrl)
    this.pdfUrl= pdf.createLoadingTask({
      url: this.src,
      cMapUrl: '../../../../static/cmaps/',
      cMapPacked: true
    })
  },
  methods:{
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage(val) {
      // console.log(val)
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--
        // console.log(this.currentPage)
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++
        // console.log(this.currentPage)
      }
    }
  }
}
</script>

<style lang="less">
.arrow{
  text-align: center;
}
</style>
