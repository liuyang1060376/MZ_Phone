<template>
  <div>
    <form action="">
      <input type="file" id="file" @change="postImg($event)">
      <button type="submit" >提交</button>
    </form>
<!--    <div  v-if="getUser">-->
<!--      <ReportHead   />-->
<!--      <Pdf />-->
<!--      <ReportServer />-->
<!--    </div>-->
<!--    <LoginSelect v-else />-->
  </div>
</template>

<script>
import ReportHead from "../../components/Report/ReportHead";
import LoginSelect from "../Login/LoginSelect";
import Pdf from "../../components/Report/Pdf";
import ReportServer from "../../components/Report/ReportServer";
import {mapGetters} from  'vuex'
import axios from "axios";
export default {
  name: "Report",
  data(){
    return{
      filedata:''
    }
  },
  components:{LoginSelect, ReportHead,Pdf,ReportServer},
  computed:{
    ...mapGetters(['getUser'])
  },
  methods:{
    postImg(event){
      var file = event.target.files[0]
      var Data = new  FormData()
      var a='123'
      Data.append(file.name,file)
      Data.append('a',a)
      console.log(Data)
      let config = {
        headers:{'Content-Type':'multipart/form-data'}
      };
      axios.post('/api/uploadImg',Data,config).then(
        data=>{
          console.log(data)
        }
      )
    },

  }
}
</script>

<style lang="less">

</style>
