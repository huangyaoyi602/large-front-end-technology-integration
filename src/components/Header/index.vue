<!--
 * @Author: hyy
 * @Date: 2020-12-28 10:44:30
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-11 14:06:40
-->
<template>
  <div :class="$style.container">
    <div :class="$style.body">
      <div :class="$style.logoBox"><img :class="$style.logo" src="" alt="logo"></div>
    <div :class="$style.nav">
      <el-menu background-color="#ebebeb" text-color="#111" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="replacePage('/home',1)">首页推荐</el-menu-item>
        <el-menu-item index="2" @click="replacePage('/knowledge',2)">知识体系</el-menu-item>
        <el-menu-item index="3">霸嗝收集</el-menu-item>
        <el-menu-item index="4">前沿探索</el-menu-item>
        <el-menu-item index="5">关于我们</el-menu-item>
        <el-menu-item index="6" @click="replacePage('/test',6)">功能测试</el-menu-item>
      </el-menu>
    </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive,toRefs,computed} from 'vue'
import router from '@/router'
export default defineComponent({
  name:'Header',
  setup(){
    const data = reactive({
      
    })
    const refData = toRefs(data)

    const replacePage = (url:string,index:number)=>{
      sessionStorage.setItem('index',JSON.stringify(index)) 
      router.replace(url)
    }

    const activeIndex = computed(()=>JSON.parse(sessionStorage.getItem('index')||'1'))

    return {
      ...refData,
      replacePage,
      activeIndex
    }
  }
})
</script>

<style src="./header.scss"  lang="scss" module>
</style>