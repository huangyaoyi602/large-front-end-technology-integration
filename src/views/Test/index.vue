<!--
 * @Author: hyy
 * @Date: 2020-12-31 13:36:44
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-04 16:47:00
-->
<template>
  <div :class="$style.container">
    <div :class="$style.body">
       {{word}}
       <div>{{test.num}}</div>

       <div>？？{{num_}}</div>
   <div @click="addNum" >3</div>
   <div @click="setNum" >5</div>
   <div @click="getTest">test</div>
   <div :class="$style.user" @click="user">USER</div>
    </div>

    
  </div>
</template>

<script lang="ts">
import { mount } from "@vue/test-utils"
import {defineComponent,reactive,toRefs,computed} from "vue"
import {useRoute,useRouter} from 'vue-router'
import {mapGetters, useStore} from 'vuex'
import {GlobalState} from '../../store/index'
import {getUser} from '../../api/test'

// interface dataProps{

// }
export default defineComponent({
  name: "Test",
  setup() {
   const data = reactive({
     word:'测试页面---1'
   })
   const store = useStore<GlobalState>()
   const refData = toRefs(data)
   const test = computed(()=>store.state.test)//直接获取到数据
    const num_ = computed(()=>store.getters['test/getNum'])//模块化的读取方法
   const addNum = ()=>{
     store.commit('test/setNum',3)
   }
   const setNum = ()=>{
     store.dispatch('test/handleNum',5)}
    const getTest = ()=>{
      console.log('dispatch');
      store.dispatch('test/handleGetTest')
      
    }
    const user = async ()=>{
      await getUser().then(res=>console.log(res))
    }
    return {
     ...refData,
     test,
     num_,
     addNum,
     setNum,
     getTest,
     user
    }
  }
})
</script>

<style src="./test.scss"
 lang="scss" module>
</style>
