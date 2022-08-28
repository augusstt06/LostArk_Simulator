const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/": {
        target: "https://lostark.game.onstove.com",
        changeOrigin: false,
        secure: false,
      },
    },
  },
});
