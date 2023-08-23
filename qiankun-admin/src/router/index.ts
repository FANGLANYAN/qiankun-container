import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// import ProductManage from "@/pages/productManage/index.vue";
// import ShopcardManage from "@/pages/shopcardManage/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/productManage",
    component: () => import("@/pages/productManage/index.vue"),
  },
  {
    path: "/shopcardManage",
    component: () => import("@/pages/shopcardManage/index.vue"),
  },
];
//由于ts检测，会提示某个对象中不存在__POWERED_BY_QIANKUN__属性，需要在global.d.ts中进行interface的追加之后重启项目
const router = createRouter({
  history: createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? "/home/admin" : "/"
  ),
  routes,
});

export default router;
