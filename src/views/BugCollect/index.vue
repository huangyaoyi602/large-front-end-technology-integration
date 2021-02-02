<!--
 * @Author: hyy
 * @Date: 2021-01-28 08:34:44
 * @LastEditors: hyy
 * @LastEditTime: 2021-01-29 08:44:41
-->
<template>
  <div :class="$style.container">
    <div :class="$style.input">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="作者">
          <el-input v-model="formLabelAlign.author"></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="formLabelAlign.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button type="primary" @click="onObtain">获取</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import {useStore} from 'vuex'
import { GlobalState } from '../../store'
// interface dataProps{

// }
export default defineComponent({
  name: "App",
  setup() {
    const store = useStore<GlobalState>()
    const data = reactive({
      formLabelAlign: {
        author: "",
        title: "",
        content: "",
      },
    });
    const refData = toRefs(data);
    const onSubmit = ()=>{
      const params = data.formLabelAlign
      store.dispatch('bugStore/setBugData',params)
      
    }
    const onObtain = ()=>{
      store.dispatch('bugStore/getBugData')
    }
    return {
      ...refData,
      onSubmit,
      onObtain
    };
  },
});
</script>

<style src='./bugcollect.scss'
 lang="scss" module>
</style>
