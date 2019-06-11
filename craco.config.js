const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  eslint: {
    configure: {
      extends: ["react-app", "plugin:prettier/recommended"],
      plugins: ["prettier"],
      rules: {
        "no-console": "off",
        "no-debugger": "off",
        "no-unused-vars": "off",
        // "@typescript-eslint/no-unused-vars": "off",
        "prettier/prettier": "error"
      }
    }
  },
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: "css"
        }
      ]
    ]
  },
  webpack: {
    alias: { "@": resolveApp("src") }
  },
  plugins: [
    { plugin: require("craco-plugin-react-hot-reload") },
    { plugin: require("craco-cesium")() }
  ]
};
