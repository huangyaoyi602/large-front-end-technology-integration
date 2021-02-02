/*
 * @Author: hyy
 * @Date: 2020-12-31 14:35:58
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-02 11:18:31
 */
import {TEST} from '../api/test'

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
    },
    async handleGetTest({state,commit}){
      const res = await TEST()
      console.log(res);
      res && commit('setNum',res)
    }
  }
}

export default Test



