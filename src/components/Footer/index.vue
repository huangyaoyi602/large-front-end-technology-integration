<!--
 * @Author: hyy
 * @Date: 2020-12-28 15:10:00
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-28 15:52:44
-->
<template>
  <div :class="$style.container">
    233333
  </div>
</template>

<script lang="ts">
import {reactive,toRefs} from "vue"
//  interface dataProps{

//  }
export default{
  name:"Footer",
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

<style src="./footer.scss"
 lang="scss" module>
</style>
