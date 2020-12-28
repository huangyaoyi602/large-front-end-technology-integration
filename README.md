<!--
 * @Author: hyy
 * @Date: 2020-12-21 13:11:59
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-28 16:58:51
-->
* 基于vue3.0开发

* 使用vue-cli搭建

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli

vue create my-project
# OR
vue ui
```

* 运行项目：npm run serve
* 构建打包：npm run build

#### 项目搭建

1. main.ts引入reset.css重置样式
2. 引入ui库element-plus（完整引入）
   ```
   安装命令：npm install element-plus --save
   ```
3. 路由组件使用懒加载
4. 移动端适配方案,已注释，未启用
   ```
   npm install  px2rem-loader --save
   npm install amfe-flexible --save
   ```
5. css模块化
   * 在vue中使用外部css文件，class使用 
   ```
   :class="$style.xxx"
   ```
6. 引入时间插件dayjs


#### 开发日志 by hyy
1. 首页框架，页面css引入模版以及路由范例 12.28