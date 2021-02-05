<!--
 * @Author: hyy
 * @Date: 2021-01-28 08:34:44
 * @LastEditors: hyy
 * @LastEditTime: 2021-02-05 16:05:01
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
          <div>
            <div ref="editor"></div>
            <button @click="syncHTML">同步内容</button>
            <div :innerHTML="content.html"></div>
          </div>
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
import { defineComponent, onBeforeUnmount, onMounted, reactive, toRefs,ref } from "vue";
import { useStore } from "vuex";
import WangEditor from 'wangeditor'
import { GlobalState } from "../../store";
// interface dataProps{

// }
export default defineComponent({
  name: "App",
  setup() {
    const store = useStore<GlobalState>();
    const data = reactive({
      formLabelAlign: {
        author: "",
        title: "",
        content: "",
      },
    });
    const refData = toRefs(data);
    const onSubmit = () => {
      const params = data.formLabelAlign;
      store.dispatch("bugStore/setBugData", params);
    };
    const onObtain = () => {
      store.dispatch("bugStore/getBugData");
    };

const editor = ref()
    const content = reactive({
      html:'',
      text:''
    })

let instance;
        onMounted(() => {
            instance = new WangEditor(editor.value);
            Object.assign(instance.config, {
                onchange() {
                    console.log('change');
                },
            });
            instance.create();
        });
        onBeforeUnmount(() => {
            instance.destroy();
            instance = null;
        });
        const syncHTML = () => {
            content.html = instance.txt.html();
        };




    return {
      ...refData,
      onSubmit,
      onObtain,
      syncHTML,
      editor,
      content
    };
  },
});
</script>

<style src='./bugcollect.scss'
 lang="scss" module>
</style>
