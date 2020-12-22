<template>
  <div>
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      :activefontsize="fontSize"
      @input="getItem">
    </ly-tab>
    <div class="category_content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  data(){
    return{
      selectedId:0,
      items:[
        {label: '体检'},
        {label: '核酸检测'},
        {label: '体重管理'},
        {label: 'AI医疗'},
        {label: '健康课堂'},
        {label: '健康资讯'},
      ],
      routerList:['/category/tj','/category/hsjc','/category/tzgl'],
      options:{
        activeColor: '#348903'
      },
      fontSize:'30px'
    }
  },
  methods:{
    getItem(id){
      this.$router.replace(this.routerList[id])
    }
  }
}
</script>

<style lang="less">
.category_content {
  width: 100%;
  min-height: 700px;
  margin: 0 auto;
  background-color: red;
}
</style>
