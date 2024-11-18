// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const path = require("path");

module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    liveReload: true,
  },
};
