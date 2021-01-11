/*
 * @Author: hyy
 * @Date: 2021-01-11 11:06:13
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-11 13:36:53
 */
import { config } from '@vue/test-utils'
import axios from 'axios'

const request = axios.create({
  timeout:20000,
  headers:{
    "Content-Type": "application/json;charset=UTF-8",
  },
  baseURL:'/api'
})

request.interceptors.request.use(
 config=>config,
 error=>{
   Promise.reject(error)
 }
)

request.interceptors.response.use(
  response=>{
    console.log(response);
    
    return response.data},
  error=>{
    console.log(error);
    
  }
)

export default request