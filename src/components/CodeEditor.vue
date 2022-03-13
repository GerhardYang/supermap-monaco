<!--
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-03-13 00:42:09
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-03-13 23:16:29
 * @Description: file content
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
-->
<template>
  <div class="codePane">
    <span>源代码编辑器</span>
    <span class="codePaneTools">
      <span>主题：</span>
      <a-select
        style="width: 120px"
        size="small"
        value="vs-dark"
        @change="changeTheme"
      >
        <a-select-option size="small" value="vs-dark">暗色</a-select-option>
        <a-select-option size="small" value="hc-black"
          >高对比度</a-select-option
        >
        <a-select-option size="small" value="vs">浅色</a-select-option>
      </a-select>
      <a-button type="link" @click="run"><PlayCircleOutlined />运行</a-button>
      <a-button type="link" @click="reset"><ReloadOutlined />重置</a-button>
    </span>
  </div>
  <div id="monaco-editor"></div>
</template>

<script>
import { setLocaleData } from "monaco-editor-nls";
import zh_CN from "monaco-editor-nls/locale/zh-hans";
setLocaleData(zh_CN);

// import * as monaco from "monaco-editor";
const monaco = require("monaco-editor/esm/vs/editor/editor.api");
import axios from "axios";

import { PlayCircleOutlined, ReloadOutlined } from "@ant-design/icons-vue";
import { toRaw } from "vue";

export default {
  data() {
    return {
      editor: {},
      defaultOptions: {
        value: "", //编辑器初始显示文字
        language: "html", //语言支持自行查阅demo
        automaticLayout: true, //自动布局
        theme: "vs-dark", //官方自带三种主题vs, hc-black, or vs-dark
      },
      htmlContent: "",
    };
  },
  components: {
    PlayCircleOutlined,
    ReloadOutlined,
  },
  mounted() {
    const fileURL = this.$route.query.file;
    console.log(fileURL);
    this.initEditor(fileURL);
  },
  methods: {
    getHtmlContent(url) {
      return axios.get(url);
    },
    async initEditor(fileURL) {
      let res = await this.getHtmlContent(fileURL);
      this.htmlContent = res.data;
      this.defaultOptions.value = res.data;
      // 初始化编辑器，确保dom已经渲染
      this.editor = monaco.editor.create(
        document.getElementById("monaco-editor"),
        this.defaultOptions
      );
      this.run();
    },
    reset() {
      toRaw(this.editor).setValue(this.defaultOptions.value);
      this.run();
    },
    changeTheme(value) {
      console.log(value);
      this.defaultOptions.theme = value;
      toRaw(this.editor).updateOptions(this.defaultOptions);
    },
    run() {
      let html = toRaw(this.editor).getValue();
      this.$emit("run", html);
    },
  },
};
</script>

<style lang="less" scoped>
.codePane {
  margin-top: 60px;
  width: 100%;
  height: 40px;
  line-height: 24px;
  z-index: 800;
  background-color: white;
  padding: 8px 22px;
  box-shadow: 0 2px 10px #dddddd;
  .codePaneTools {
    margin-top: -3px;
    display: inline;
    float: right;
  }
}
#monaco-editor {
  width: 100%;
  height: calc(100vh - 100px);
}
</style>
