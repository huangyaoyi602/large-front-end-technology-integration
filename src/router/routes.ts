/*
 * @Author: hyy
 * @Date: 2020-12-28 16:27:12
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-02 10:09:25
 */


import {  RouteRecordRaw } from "vue-router";

const Home = ()=>import(/* webpackChunkName: "Home" */ '../views/Home/index.vue')
const Knowledge = ()=>import(/* webpackChunkName: "Knowledge" */ '../views/Knowledge/index.vue')
const Test = ()=>import(/* webpackChunkName: "Test" */ '../views/Test/index.vue')
const BugCollect = ()=>import(/* webpackChunkName:"Bug" */ '../views/BugCollect/index.vue')
const Register = ()=>import(/* webpackChunkName:"Register" */ '../views/Register/index.vue')
const Login = ()=>import(/* webpackChunkName:"Login" */ '../views/Login/index.vue')

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
  {
    path:'/bugcollect',
    name:'bugcollect',
    component:BugCollect
  },
  {
    path:'/test',
    name:"test",
    component:Test
  },
  {
    path:'/register',
    name:'register',
    component:Register
  },
  {
    path:'/login',
    name:'login',
    component:Login
  }

];