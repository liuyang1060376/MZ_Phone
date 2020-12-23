import ajax from './ajax'

//获取首页轮播图
export const getBanner = () => ajax('/api/getBanner',{},'GET')

//获取验证码
export const getCode=(mobile) =>ajax('/api/getCode',{mobile},'GET')
