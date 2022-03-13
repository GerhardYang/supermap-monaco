/*
 * @Author: 杨光辉(GerhardYang)
 * @Date: 2022-03-12 23:14:00
 * @LastEditors: 杨光辉(GerhardYang)
 * @LastEditTime: 2022-03-13 13:31:12
 * @Description: file content
 * @Copyright: 超图软件华中平台客户中心 (SuperMap Software Co., Ltd. -Central China Platform)
 */
const { defineConfig } = require("@vue/cli-service");
const MonacoWebpackPlugin = require("monaco-editor-esm-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  productionSourceMap: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.js/,
          enforce: "pre",
          include: /node_modules[\\/]monaco-editor[\\/]esm/,
          use: MonacoWebpackPlugin.loader,
        },
      ],
    },
    plugins: [new MonacoWebpackPlugin()],
  },
});
