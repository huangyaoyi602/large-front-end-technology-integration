<!--
 * @Author: hyy
 * @Date: 2020-12-21 15:27:23
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-28 16:20:38
-->
<template>
  <div :class="$style.container">
    <div :class="$style.body">
      
    </div>
  </div>
</template>

<script lang="ts">
import {reactive,toRefs} from "vue"
//  interface dataProps{

//  }
export default{
  name:"Home",
  setup() {
   const data = reactive({

   })
   const refData = toRefs(data)
    return {
     ...refData
    }
  }
}
</script>

<style src="./home.scss"
 lang="scss" module>
</style>
