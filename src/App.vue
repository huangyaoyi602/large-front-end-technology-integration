<!--
 * @Author: hyy
 * @Date: 2020-12-21 15:19:24
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-04 16:00:28
-->
<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import {defineComponent} from 'vue'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default defineComponent({
  name:'App',
  components:{
    Header,Footer
  }
})
</script>
<style lang="scss">
</style>
