/*
 * @Author: hyy
 * @Date: 2020-12-21 16:33:19
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-11 13:26:08
 */
// const adaptive = require('postcss-adaptive');
 
module.exports = {
    devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:9091',
        pathRewrite:{'^/api':''}
      }
    }
  }
  
  
}