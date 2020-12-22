<template>
  <div id="app">
    <router-view/>
    <TabBar />
  </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";

export default {
  name: 'App',
  data(){
    return{
    }
  },
  components:{TabBar}
}
</script>

<style lang="less">
#app{
  width: 100%;
  margin-bottom: 210px;
  background-color: #fff;
  z-index: -999;
  height: 100%;
}
@baseFont :50;
body{
  width: 100%;
  height: 100%;
  min-width: 320px;
  max-width: 750px;
  line-height: 1.2rem;
  margin: 0 auto;
  font-size: 14rem / @baseFont;
}
</style>
