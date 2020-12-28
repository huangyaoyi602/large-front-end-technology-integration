/*
 * @Author: hyy
 * @Date: 2020-12-28 16:27:12
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-28 16:38:00
 */


import {  RouteRecordRaw } from "vue-router";

const Home = ()=>import(/* webpackChunkName: "Home" */ '../views/Home/index.vue')
const Knowledge = ()=>import(/* webpackChunkName: "Knowledge" */ '../views/Knowledge/index.vue')

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect:'/home'
  },
  {
    path:'/home',
    name:"home",
    component:Home
  },
  {
    path:'/knowledge',
    name:"knowledge",
    component:Knowledge
  },

];