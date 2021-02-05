<!--
 * @Author: hyy
 * @Date: 2021-02-02 10:00:16
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-05 15:19:32
-->
<template>
  <div :class="$style.container">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" >
  <el-form-item label="用户名">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="密码">
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
import {useRoute,useRouter} from 'vue-router'

import {Login} from '../../api/login'
// interface dataProps{

// }
export default defineComponent({
  name:"App",
  setup() {
  const route = useRoute()
  const router = useRouter()
   const data = reactive({
     labelPosition: 'top',
        formLabelAlign: {
          name: '',
          pwd: '',
        }
   })

    const onSubmit = async ()=>{

      

      const {name,pwd}=data.formLabelAlign
      const params = {name,password:pwd}
      await Login(params).then((res:any)=>{
        if(res['success']){
        sessionStorage.setItem('USER_KEY',JSON.stringify(res['message'].access_token))       
        // if(res['success'])sessionStorage.setItem('REF_KEY',JSON.stringify(res['message'].refresh_token)) 
        const query = route.query
        console.log('query',query);
        if(query.err==='401'){
        router.go(-1)
        }else{
          router.replace('/home')
        }


        }
        
        

      } )
    }

   const refData = toRefs(data)
    return {
     ...refData,
     onSubmit
    }
  }
})
</script>

<style src='./login.scss'
 lang="scss" module>
</style>
