<!--
 * @Author: hyy
 * @Date: 2020-12-28 16:23:33
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-28 16:26:40
-->
<template>
  <div :class="$style.container">
    <div :class="$style.body">
      23333
    </div>
    
  </div>
</template>

<script lang="ts">
import {reactive,toRefs} from "vue"
//  interface dataProps{

//  }
export default{
  name:"App",
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

<style src="./knowledge.scss"
 lang="scss" module>
</style>
