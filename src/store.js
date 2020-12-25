import  vue from  'vue'
import Vuex from 'vuex'
import {getBanner,loginStatue} from "./api/api";

console.log('fangwenle ')

vue.use(Vuex)

export default new Vuex.Store({
  stata:{
    BannerList:[],
    user:''
  },
  mutations:{
    //用户信息
    setUser(state,data){
      state.user=data
      sessionStorage.setItem('user',JSON.stringify(data))
    },
    setBannerList(state,list){
      state.BannerList=list
      sessionStorage.setItem('bannerList',JSON.stringify(list))
    }
  },
  actions:{
    async reqBannerList(content,callback){
      let result=await getBanner()
      content.commit('setBannerList',result.data)
      callback && callback()
      //if callback,{callback()}
    },
     reqUserStatue(content){
      loginStatue().then(result=>{
        content.commit('setUser',result.data)
      }).catch(err=>{
        console.log(err)
      })

    }
  },
  getters:{
    getBannerList(state){
      if(state.BannerList===undefined){
        state.BannerList = JSON.parse(sessionStorage.getItem('bannerList'))
        console.log('ZHIXINGLELEIBU');

      }
      return state.BannerList
    },
    getUser(state){
      if(state.user===undefined){
        state.user=JSON.parse(sessionStorage.getItem('user'))
      }
      return state.user
    }
  }
})

'解决vuex刷新问题及getter的使用 https://segmentfault.com/a/1190000017805890'
