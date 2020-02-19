import Vue from 'vue';
import Router from 'vue-router';


import Login from '@/components/Login';/* 登录  */
import Admin from '@/components/Admin';/* 账号管理 */
import Home from '@/components/Home';/* 微博首页 */
import Mya from '@/components/Mya'; 
import Myb from '@/components/Myb'; 
import Myc from '@/components/Myc'; 
import Myd from '@/components/Myd'; 
import Mye from '@/components/Mye'; 
import Myf from '@/components/Myf'; 



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/Login',name: 'Login',component: Login},
    {path: '/',name: 'Admin',component: Admin},
    {path: '/Home',name: 'Home',component: Home},
    {path: '/Mya',name: 'Mya',component: Mya},
    {path: '/Myb',name: 'Myb',component: Myb},
    {path: '/Myc',name: 'Myc',component: Myc},
    {path: '/Myd',name: 'Myd',component: Myd},
    {path: '/Mye',name: 'Mye',component: Mye},
    {path: '/Myf',name: 'Myf',component: Myf}
  ]
})
