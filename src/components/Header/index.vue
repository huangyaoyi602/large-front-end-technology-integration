<!--
 * @Author: hyy
 * @Date: 2020-12-28 10:44:30
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-05 11:24:47
-->
<template>
  <div :class="$style.container">
    <div :class="$style.body">
      <div :class="$style.logoBox"><img :class="$style.logo" src="" alt="logo"></div>
    <div :class="$style.nav">
      <el-menu background-color="#ebebeb" text-color="#111" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="replacePage('/home')">首页推荐</el-menu-item>
        <el-menu-item index="2" @click="replacePage('/knowledge')">知识体系</el-menu-item>
        <el-menu-item index="3" @click="replacePage('/bugcollect')">BUG收集</el-menu-item>
        <el-menu-item index="4">前沿探索</el-menu-item>
        <el-menu-item index="5">关于我们</el-menu-item>
        <el-menu-item index="6" @click="replacePage('/test')">功能测试</el-menu-item>
        <el-menu-item index="7" @click="replacePage('/register')">注册</el-menu-item>
        <el-menu-item index="8" @click="replacePage('/login')">登录</el-menu-item>
      </el-menu>
    </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive,toRefs,computed, watch} from 'vue'
import router from '@/router'
import {useRoute} from 'vue-router'
export default defineComponent({
  name:'Header',
  setup(){
    const route = useRoute()
    const data = reactive({
      path:route.fullPath,
      activeIndex:1
    })
    const refData = toRefs(data)
    

    const replacePage = (url:string)=>{
      router.replace(url)
    }

    watch(()=>route.fullPath,(newPath,oldPath)=>{
      switch(newPath){
        case '/home':
          data.activeIndex = 1;
          break
        case '/knowledge':
          data.activeIndex = 2
          break
        case '/bugcollect':
          data.activeIndex = 3
          break
        case '/test':
          data.activeIndex = 6
          break
        case '/register':
          data.activeIndex = 7
          break
        case '/login':
          data.activeIndex = 8
          break
      }
    })

    return {
      ...refData,
      replacePage,
      route
    }
  },
  methods: {
    getPath(){
      console.log(this.route.fullPath);
      
    }
  },
  mounted(){  
    this.getPath()
  },
  watch:{
  }
})
</script>

<style src="./header.scss"  lang="scss" module>
</style>