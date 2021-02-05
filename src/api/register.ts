/*
 * @Author: hyy
 * @Date: 2021-02-02 11:12:17
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-04 09:31:00
 */
import request from './index'

export const goRegiste = (params) => request.post('/register',params)