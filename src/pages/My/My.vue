<template>
    <div>
      <div v-if="getUser">
        <Header />
        <OrderManager />
        <ServerManager />
      </div>
      <LoginSelect v-else />
    </div>
</template>

<script>
import LoginSelect from "../Login/LoginSelect";
import Header from "../../components/My/Header";
import OrderManager from "../../components/My/OrderManager";
import ServerManager from "../../components/My/ServerManager";
import {mapState,mapGetters} from 'vuex'

export default {
  name: "My",
  components: {LoginSelect,Header,OrderManager,ServerManager},
  computed:{
   ...mapState(['user']),
    ...mapGetters(['getUser'])
  }
}
</script>

<style lang="less">

</style>
