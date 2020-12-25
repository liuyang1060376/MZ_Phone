<template>
    <div>
      <Header />
      <OrderManager />
      <ServerManager />
<!--      <div v-if="this.$store.state.user"></div>-->
<!--      <LoginSelect v-else />-->
    </div>
</template>

<script>
import LoginSelect from "../Login/LoginSelect";
import Header from "../../components/My/Header";
import OrderManager from "../../components/My/OrderManager";
import ServerManager from "../../components/My/ServerManager";
import {mapState} from 'vuex'

export default {
  name: "My",
  components: {LoginSelect,Header,OrderManager,ServerManager},
  computed:{
   ...mapState(['user'])
  }
}
</script>

<style lang="less">

</style>
