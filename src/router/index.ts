import {createRouter, createWebHistory, Router,RouteRecordRaw} from "vue-router";
const routes:RouteRecordRaw[]=[{
        path:'/',
       redirect:'/home'
    },
    {
        path:'/home',
        component:()=>import('@/views/home/home.vue')
    },
    {
        path:'/login',
        component:()=>import('@/views/login/login.vue')
    },
    //未识别页面 404报警
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ()=>import('@/views/error/404.vue') },
    // 将匹配以 `/user-` 开头的所有内容，并将其放在 `$route.params.afterUser` 下
    { path: '/user-:afterUser(.*)', component: ()=>import('@/views/user/user.vue') },

]
const  router:Router = createRouter({
    history:createWebHistory(),
    routes:routes
})

//导出对象
export default router