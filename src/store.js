import  vue from  'vue'
import Vuex from 'vuex'
import {getBanner} from "./api/api";

console.log('fangwenle ')

vue.use(Vuex)

export default new Vuex.Store({
  stata:{
    BannerList:[],
    lis:'123'
  },
  mutations:{
    setBannerList(state,list){
      state.BannerList=list
    }
  },
  actions:{
    async reqBannerList(content,callback){
      let result=await getBanner()
      console.log(result)
      content.commit('setBannerList',result.data)
      callback && callback()
      //if callback,{callback()}
    }
  }
})
