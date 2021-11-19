// WORKING HERE
// ONE_RAPID_PLAY_URL = "https://onerapidplay.com/api/v1"

// module.exports = {
//   devServer: {
//     proxy: "https://onerapidplay.com/api/v1",
//   }
// }

module.exports = {
  // resolve: { alias: { vue$: "vue/dist/vue.common.js" } },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
  },
};
