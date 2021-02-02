/*
 * @Author: hyy
 * @Date: 2021-02-02 11:12:17
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-02 11:13:05
 */
import request from './index'

// export const TEST = ()=> request.get('/home')
// export const getData = () => request.get('/test/get')
export const goRegiste = (params) => request.post('/register',params)