<!--
 * @Author: hyy
 * @Date: 2020-12-31 13:36:44
 * @LastEditors: hyy
 * @LastEditTime: 2020-12-31 16:50:45
-->
<template>
  <div :class="$style.container">
    <div :class="$style.body">
       test--------
       <div>{test.num}</div>
    </div>
   
  </div>
</template>

<script lang="ts">
import { mount } from "@vue/test-utils"
import {defineComponent,reactive,toRefs,computed} from "vue"
import {useRoute,useRouter} from 'vue-router'
import {useStore} from 'vuex'
import {GlobalState} from '../../store/index'

// interface dataProps{

// }
export default defineComponent({
  name: "Test",
  setup() {
   const data = reactive({
   })
   const store = useStore<GlobalState>()
   const refData = toRefs(data)
   const test = computed(()=>store.state.test)
    return {
     ...refData,
     test
    }
  }
})
</script>

<style src="./test.scss"
 lang="scss" module>
</style>
