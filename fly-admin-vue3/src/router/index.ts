import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'

import Home from '@/pages/home/index.vue'
import About from '@/pages/about/index.vue'

const routes:RouteRecordRaw[] = [{
    path:'/home',
    component:Home
}
,{
    path:'/about',
    component:About
}
]
//由于ts检测，会提示某个对象中不存在__POWERED_BY_QIANKUN__属性，需要在global.d.ts中进行interface的追加之后重启项目
const router = createRouter({history:createWebHistory(window.__POWERED_BY_QIANKUN__?'/home/micro-vue-app3':'/'),routes})

export default router 