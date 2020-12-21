/*
 * @Author: hyy
 * @Date: 2020-12-21 15:19:24
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-21 15:46:10
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = ()=>import(/* webpackChunkName: "Home" */ '../views/Home/index.vue')


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
