/*
 * @Author: hyy
 * @Date: 2020-12-31 14:35:58
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-31 16:56:30
 */
import {Module} from 'vuex'
export interface TestState{
    num:number 
}
export interface _TestState{
  
}

const state:TestState = {
  num:1
}

// const asyncAndCommit = async()=>{}


const Test:Module<TestState,_TestState>={
  namespaced:true,
  state,
  mutations:{
    setNum(state:TestState,newNum:number){
     state.num = newNum
    }
  },
  getters:{
    getNum(state:TestState){
      return state.num
    }
  },
  actions:{
    handleNum({state,commit},query){
      commit('getNum',query)
    }
  }

}

export default Test



