import ajax from './ajax'

//获取首页轮播图
export const getBanner = () => ajax('/api/getBanner',{},'GET')

//获取验证码
export const getCode=(mobile) =>ajax('/api/common/getCode',{mobile},'GET')
//登录接口
export const login = (mobile,pwd,type,code) =>ajax('/api/login',{mobile,pwd,type,code},'POST')
//判断是否登录
export  const loginStatue = () =>ajax('/api/isLogin',{},'GET')

