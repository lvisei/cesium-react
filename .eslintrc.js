module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": "off",
    "prettier/prettier": "error"
  }
};