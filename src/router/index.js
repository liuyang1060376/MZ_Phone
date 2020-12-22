import Vue from 'vue'
import Router from 'vue-router'
import TabBar from "../components/TabBar/TabBar";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import My from "../pages/My/My";
import Report from "../pages/Report/Report";
import Login from "../pages/Login/Login";
import LoginSelect from "../pages/Login/LoginSelect";
import Tj from "../pages/Category/Childrens/Tj";
import Tzgl from "../pages/Category/Childrens/Tzgl";
import Hsjc from "../pages/Category/Childrens/Hsjc";
import Register from "../pages/Register/Register";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/category',
      component: Category,
      redirect: '/category/tj',
      children:[
        {path:'tj',component:Tj},
        {path:'tzgl',component:Tzgl},
        {path:'hsjc',component:Hsjc}
      ]
    },
    {
      path:'/my',
      redirect: '/LoginSelect'
    },
    {
      path:'/report',
      component: Report
    },
    {
      path:'/login',
      component: Login
    },
    {
      path:'/LoginSelect',
      component: LoginSelect
    },
    {
      path:'/register',
      component: Register
    }
  ]
})
