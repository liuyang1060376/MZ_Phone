import axios from  'axios'

export default function (url = '', params = {}, type = 'GET') {
  return new Promise((resolve,reject)=>{
    let paramsStr = '?'
    if(type === 'GET'){
      Object.keys(params).forEach(value => {
        paramsStr=paramsStr+value+'='+params[value]+'&'
      })
      //过滤最后的&
      if(paramsStr!==null){
        newParamsStr=paramsStr.substr(0,paramsStr.lastIndexOf('&'))
      }
      url+=url+newParamsStr
      promise=axios.get(url)
    }else{
      promise=axios.post(url,params)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (err){
      reject(err)
    })
  })
}
