<!--
 * @Author: hyy
 * @Date: 2020-12-28 10:44:30
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-28 16:49:35
-->
<template>
  <div :class="$style.container">
    <div :class="$style.body">
      <div :class="$style.logoBox"><img :class="$style.logo" src="" alt="logo"></div>
    <div :class="$style.nav">
      <el-menu background-color="#ebebeb" text-color="#ccc" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="replacePage('/home')">首页</el-menu-item>
        <el-menu-item index="2" @click="replacePage('/knowledge')">知识体系</el-menu-item>
        <el-menu-item index="3">首页</el-menu-item>
        <el-menu-item index="4">首页</el-menu-item>
        <el-menu-item index="5">首页</el-menu-item>
      </el-menu>
    </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted} from 'vue'
import router from '@/router'
export default defineComponent({
  name:'Header',
  setup(){
    const activeIndex = 1

    const replacePage = (url:string)=>{
      router.replace(url)
    }


    return {
      activeIndex,
      replacePage
    }
  }
})
</script>

<style src="./header.scss"  lang="scss" module>
</style>