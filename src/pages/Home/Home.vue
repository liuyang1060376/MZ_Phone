<template>
    <div>
      <Nav />
      <Slider />
      <Shortcart />
      <EnterList />
      <Hot />
      <HealthyManage />
      <News />
      <banner />
      <ServiceList />
    </div>
</template>

<script>
import Nav from "../../components/Header/Nav";
import Slider from "../../components/Home/Slider";
import Shortcart from "../../components/Home/Shortcart";
import EnterList from "../../components/Home/EnterList";
import Hot from "../../components/Home/Hot";
import HealthyManage from "../../components/Home/HealthyManage";
import News from "../../components/Home/News";
import banner from "../../components/Home/banner";
import ServiceList from "../../components/Home/ServiceList";
export default {
  name: "Home",
  components:{Slider, Nav,Shortcart,EnterList,Hot,HealthyManage,News,banner,ServiceList},
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
