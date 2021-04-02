module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier', // 导入prettier的拓展
    'plugin:vue/vue3-recommended', // 导入vue3的格式建议拓展
    'plugin:@typescript-eslint/recommended', // 使用ts导入ts的格式建议拓展
    'plugin:prettier/recommended', // 导入prettier建议的拓展
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    jsxPragma: 'React', // jsx的解析方式
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  parser: 'vue-eslint-parser',
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {}, // rules暂时没有用到的
};
