# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

|--src
    |--components # 组件
    |--hooks # hooks
    |--assets # 静态文件
        |--imgs # 图片
        |--fonts # 字体文件
        |--js # js文件
    |--layouts # 布局组件
    |--common # 基础工具
    |--styles # 样式文件
    |--pages # 页面
    |--routes # 路由文件
    |--stores # 状态管理
    |--mian.tsx # 主入口
    |--App.tsx # App文件   
|--tests # 测试文件
|--types # 声明文件
|--index.html
|--tsconfig.json # ts 配置
|--vite.config.ts # vite 配置
|--package.json
|--.gitignore
|--yarn.lock

