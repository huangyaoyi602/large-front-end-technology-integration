/*
 * @Author: hyy
 * @Date: 2020-12-31 15:15:30
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-31 15:17:53
 */
import {ComponentCustomProperties} from 'vue'
import {Store} from 'vuex'

declare module '@vue/runtime-core'{
  interface State{
    count:number
  }

  interface ComponentCustomProperties{
    $store:Store<State>
  }
}

