<template>
  <div>
    <ReportHead />
<!--    v-if="this.$store.getters.getUser"-->
    <!--    <LoginSelect v-else />-->
  </div>
</template>

<script>
import ReportHead from "../../components/Report/ReportHead";
import LoginSelect from "../Login/LoginSelect";
export default {
  name: "Report",
  components:{LoginSelect, ReportHead}
}
</script>

<style lang="less">

</style>
