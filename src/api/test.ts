/*
 * @Author: hyy
 * @Date: 2021-01-11 11:06:19
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-28 17:02:12
 */
import request from './index'

export const TEST = ()=> request.get('/home')
export const setData = (params) => request.post('/test/set',params)
export const getData = () => request.get('/test/get')