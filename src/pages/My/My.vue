<template>
    <div>
      <div v-if="this.$store.state.user">{{user}}</div>
      <LoginSelect v-else />
    </div>
</template>

<script>
import LoginSelect from "../Login/LoginSelect";
import {mapState} from 'vuex'

export default {
  name: "My",
  components: {LoginSelect},
  computed:{
   ...mapState(['user'])
  }
}
</script>

<style lang="less">

</style>
