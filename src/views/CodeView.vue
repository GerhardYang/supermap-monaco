<!--
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-03-12 23:14:00
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-03-13 18:51:02
 * @Description: file content
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
-->
<template>
  <PageHeader />
  <splitpanes class="default-theme">
    <pane :size="paneSize">
      <CodeEditor ref="CodeEditor" @run="run" />
    </pane>
    <pane :size="100 - paneSize">
      <HtmlView ref="HtmlView" />
    </pane>
  </splitpanes>
</template>

<script>
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

import PageHeader from "../components/PageHeader.vue";
import CodeEditor from "../components/CodeEditor.vue";
import HtmlView from "../components/HtmlView.vue";

export default {
  data() {
    return {
      paneSize: 40,
    };
  },
  components: { Splitpanes, Pane, PageHeader, CodeEditor, HtmlView },
  mounted() {},
  methods: {
    run(html) {
      this.$refs.HtmlView.run(html);
    },
    resize() {
      // console.log(event);
    },
  },
};
</script>
