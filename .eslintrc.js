module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser', // 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用
  parserOptions: {
    ecmaFeatures: {
      jsx: true // 启用 JSX
    },
    ecmaVersion: 12, // 指定你想要使用的 ECMAScript 版本
    sourceType: 'module'
  },
  plugins: [
    'react', // eslint-plugin-react的缩写，使ESLint支持 React 语义
    '@typescript-eslint' // @typescript-eslint/eslint-plugin的缩写，为TypeScript代码库提供lint规则
  ],
  rules: {
    semi: [2, 'always'],
    'no-use-before-define': 'off' // 'React' was used before it was defined
  }
};
