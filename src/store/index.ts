/*
 * @Author: hyy
 * @Date: 2020-12-21 15:19:24
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-28 08:56:13
 */
import { createStore } from "vuex";
import persistedstate from 'vuex-persistedstate'

import test,{TestState} from './test'
import bugStore,{BugState} from './bugCollect'

export interface GlobalState{
  test:TestState,
  bug:BugState
}


export default createStore({
  // plugins:[persistedstate({
  //   storage:window.sessionStorage//使用本地存储(可选)
  // })],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    test,
    bugStore
  }
});
