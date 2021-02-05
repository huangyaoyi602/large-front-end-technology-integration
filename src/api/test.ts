/*
 * @Author: hyy
 * @Date: 2021-01-11 11:06:19
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-04 13:43:37
 */
import request from './index'

export const TEST = ()=> request.get('/home')
export const setData = (params) => request.post('/test/set',params)
export const getData = () => request.get('/test/get')
export const getUser = () => request.get('/test/user')