/*
 * @Author: hyy
 * @Date: 2021-02-04 09:30:47
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-04 09:31:48
 */
import request from './index'

export const Login = (params) => request.post('/login',params)