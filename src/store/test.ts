/*
 * @Author: hyy
 * @Date: 2020-12-31 14:35:58
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-04 18:51:14
 */
import {Module,GetterTree,ActionTree} from 'vuex'

export interface TestState{
    num:number 
}


const state:TestState = {
  num:1
}

// const asyncAndCommit = async()=>{}


const Test={
  namespaced:true,
  state,
  mutations:{
    setNum(state:TestState,newNum:number):void{
     state.num = newNum
    }
  },
  getters:{
    getNum:(state:TestState):number=>{
      return state.num+1
    }
  },
  actions:{
    handleNum({state,commit},query:number):void{
      commit('setNum',query)
    }
  }

}

export default Test



