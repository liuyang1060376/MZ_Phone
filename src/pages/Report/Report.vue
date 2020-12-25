<template>
  <div>
    <div  v-if="getUser">
      <ReportHead   />
      <Pdf />
      <ReportServer />
    </div>
    <LoginSelect v-else />
  </div>
</template>

<script>
import ReportHead from "../../components/Report/ReportHead";
import LoginSelect from "../Login/LoginSelect";
import Pdf from "../../components/Report/Pdf";
import ReportServer from "../../components/Report/ReportServer";
import {mapGetters} from  'vuex'
export default {
  name: "Report",
  components:{LoginSelect, ReportHead,Pdf,ReportServer},
  computed:{
    ...mapGetters(['getUser'])
  }
}
</script>

<style lang="less">

</style>
