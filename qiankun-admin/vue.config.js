const { name } = require("./package");
module.exports = {
  transpileDependencies: true,
  devServer: {
    port: 3031,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: "http://localhost:9001",
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
};
