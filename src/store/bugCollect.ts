/*
 * @Author: hyy
 * @Date: 2021-01-28 08:36:02
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-28 17:07:33
 */
import {setData,getData} from '../api/test'

interface BugItem{
  title:string,
      description:string,
      time:string,
      author:string,
}

export interface BugState {
  bugs: BugItem[]
}

const state:BugState = {
  bugs:[
    {
      title:'',
      description:'',
      time:'',
      author:''
    },
  ]
}

const bugStore = {
  namespaced:true,
  state,
  mutations:{},
  getters:{},
  actions:{
    async setBugData({commit},params){
      console.log('上传了数据');
      
      const res =  await setData(params)
      console.log(res);
      
    },
    async getBugData({commit}){
      console.log('获取数据');
      
      const res = await getData()
      console.log('bug数据',res);
      
    }
  }
}

export default bugStore