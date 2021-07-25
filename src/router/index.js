// vue3构建路由的方法
import { createRouter, createWebHistory } from 'vue-router'
const Home=()=>import('../views/home/home')
const Category=()=>import('../views/category/category')
const Cart=()=>import('../views/cart/cart')
const Profile=()=>import('../views/profile/profile')

// 1.安装插件
// Vue.use(VueRouter)

//2. 创建路由对象
const routes=[
    {
        path:'',
        redirect:'home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/profile',
        component:Profile
    },

]

// const router = new VueRouter({
//     routes
// })
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
// 3.导出router
export default router
