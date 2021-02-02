<!--
 * @Author: hyy
 * @Date: 2021-02-02 10:00:16
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-02 10:34:58
-->
<template>
  <div :class="$style.container">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" inline>
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="秘密">
    <el-input v-model="formLabelAlign.pwd"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">登录</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script lang="ts">
import {defineComponent,reactive,toRefs} from "vue"
// interface dataProps{

// }
export default defineComponent({
  name:"App",
  setup() {
   const data = reactive({
     labelPosition: 'top',
        formLabelAlign: {
          name: '',
          pwd: '',
        }
   })
   const refData = toRefs(data)
    return {
     ...refData
    }
  }
})
</script>

<style src='./login.scss'
 lang="scss" module>
</style>
