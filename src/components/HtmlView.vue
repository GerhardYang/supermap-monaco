<!--
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-03-13 15:33:17
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-03-13 23:16:38
 * @Description: file content
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
-->
<template>
  <div ref="container" class="container"></div>
</template>

<script>
export default {
  methods: {
    run(html) {
      this.$refs.container.innerHTML = "";
      let iframe = document.createElement("iframe");
      this.$refs.container.appendChild(iframe);
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("id", "iframeResult");
      let ifrw = iframe.contentWindow
        ? iframe.contentWindow
        : iframe.contentDocument.document
        ? iframe.contentDocument.document
        : iframe.contentDocument;
      ifrw.document.open();
      ifrw.document.write(html);
      ifrw.document.close();
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  margin-top: 60px;
  width: 100%;
  height: calc(100vh - 60px);
}
</style>
<style>
#iframeResult {
  width: 100%;
  height: calc(100vh - 60px);
}
</style>
