/*
 * @Author: hyy
 * @Date: 2020-12-21 15:19:24
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-28 16:39:20
 */
import { createRouter, createWebHistory } from "vue-router";
import {routes} from '@/router/routes'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
