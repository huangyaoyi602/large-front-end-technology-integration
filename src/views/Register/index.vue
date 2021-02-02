<!--
 * @Author: hyy
 * @Date: 2021-01-29 10:39:21
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-02 14:24:15
-->
<template>
  <div :class="$style.container">
    <div :class="$style.login">
      <el-form
        :model="formRule"
        status-icon
        :rules="rules"
        ref="statedom"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name" >
          <el-input v-model="formRule.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="firstpwd">
          <el-input
            type="password"
            v-model="formRule.firstpwd"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="secondpwd">
          <el-input
            type="password"
            v-model="formRule.secondpwd"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="邀请码" prop="invite">
          <el-input
            v-model.number="formRule.invite"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >提交</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive,ref, toRefs } from "vue";
import {useStore} from 'vuex'
import {goRegiste} from '../../api/register'
// interface dataProps{

// }
export default defineComponent({
  name: "Register",
  
  setup(props) {
    let refs : HTMLElement 
    const store = useStore()
    // const statedom = ref(null)
    const data = reactive({
      formRule: {
        name: '111',
        firstpwd: "",
        secondpwd: "",
        invite: 0,
      },
      validateList:false
    }); 

    const regName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("用户名不能为空"));
      }
      const regExp = /^[A-Za-z_@.]{6,10}$/
      if(!regExp.test(value)){
        callback(new Error('用户名必须是6-10位之间的字母、下划线、@、.、不能以数字开头')) 
      }else{
        callback()
      }      
    };
    const regFirstPwd = (rule, value, callback) => {
       const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
      if(value===''){
        callback(new Error('请输入密码'))
      }else if(!reg.test(value)) {
       callback(new Error('密码至少包含 数字和英文，长度6-20'))
      }else{
        callback()
      }
    };
    const regSecondpwd = (rule, value, callback) => {
      if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== data.formRule.firstpwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
    };
    const regInvite = (rule, value, callback) => {
      if(value===''){
        callback('请输入邀请码')
      }else{
        callback()
      }
    };
    const resetForm = ()=>{
      // console.log(statedom.value);
       
    }
    // const submitForm = async ()=>{
    //   console.log(data.validateList);
      
    //   if(!data.validateList)return
    //   const {name,firstpwd,secondpwd,invite} = data.formRule
    //   const params = {name,firstpwd,secondpwd,invite}
    //   await goRegiste(params).then(res=>{
    //     console.log(res);
    //   })
    // }
    const rules = {
      name: [{ validator: regName }, { trigger: "blur" }],
      firstpwd: [{ validator: regFirstPwd }, { trigger: "blur" }],
      secondpwd: [{ validator: regSecondpwd }, { trigger: "blur" }],
      invite: [{ validator: regInvite }, { trigger: "blur" }],
    };
    
    const refData = toRefs(data);
    return {
      // statedom,
      rules,
      // submitForm,
      resetForm,
      ...refData,
    };
  },
  methods:{
    submitForm(){
      this.$refs.statedom.resetFields()
       
    }
  }
});
</script>

<style src='./register.scss'
 lang="scss" module>
</style>
