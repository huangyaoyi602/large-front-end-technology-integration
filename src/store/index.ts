/*
 * @Author: hyy
 * @Date: 2020-12-21 15:19:24
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-31 16:40:57
 */
import { createStore } from "vuex";
import test,{TestState} from './test'
import persistedstate from 'vuex-persistedstate'

export interface GlobalState{
  test:TestState
}


export default createStore({
  // plugins:[persistedstate({
  //   storage:window.sessionStorage//使用本地存储(可选)
  // })],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    test
  }
});
