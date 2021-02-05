/*
 * @Author: hyy
 * @Date: 2021-01-11 11:06:13
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-05 15:21:23
 */
import { config } from '@vue/test-utils'
import axios from 'axios'
import router from '@/router'

const getCookie = (name)=>{
  let arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|&)")
  if(arr === document.cookie.match(reg))
  return unescape(arr[2])
  else
  return null
}

const request = axios.create({
  timeout:20000,
  headers:{
    "Content-Type": "application/json;charset=UTF-8",
  },
  baseURL:'http://localhost:9090',  //服务器地址
})

request.interceptors.request.use(
 config=>{
  const token =  sessionStorage.getItem('USER_KEY') || ''

  
  if(token) config.headers['Authorization']= JSON.parse(token)
  config.headers['x-csrf-token'] = getCookie('csrfToken')
  return config
 },
 error=>{
   Promise.reject(error)
 }
)

request.interceptors.response.use(
  response=>{
    console.log(response);
    
    return response.data},
  error=>{
    if(error.message.slice(-3)==='401'){
      
      router.push({path:'/login',query:{err:401}})
    }
  }
)



export default request