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
      console.log('第一步')
      console.log(state.user)
      if(state.user === undefined){
        console.log('neibu')
        state.user=JSON.parse(sessionStorage.getItem('user'))
      }else{
        console.log(state.user)
      }
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
      console.log('stateneibu')
      console.log(state.BannerList)
      if(state.BannerList===undefined){
        state.BannerList = JSON.parse(sessionStorage.getItem('bannerList'))
        console.log('ZHIXINGLELEIBU');

      }
      console.log('KDSAJFKAJ;L');
      console.log(state.BannerList)
      return state.BannerList
    }
  }
})

'解决vuex刷新问题及getter的使用 https://segmentfault.com/a/1190000017805890'
