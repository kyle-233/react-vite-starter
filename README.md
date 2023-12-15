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

## 文件结构

```
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
    |--routes # 路由文件
    |--stores # 状态管理
    |--views # 页面
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

```

## 分支规范管理

### 分支命名

```
master # 主分支
release # 预发布分支
test # 测试分支
release/[function|page]_[Time] # 开发分支

```

### 提交规范

#### `commit message` 格式

```
git commit -m '<type>(<scope>): <subject>'
```

#### `type`(必须)

用于说明git commit的类别，只允许使用下面的标识。

```
feat：新功能（feature）。

fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。

fix：产生diff并自动修复此问题。适合于一次提交直接修复问题
to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix
docs：文档（documentation）。

style：格式（不影响代码运行的变动）。

refactor：重构（即不是新增功能，也不是修改bug的代码变动）。

perf：优化相关，比如提升性能、体验。

test：增加测试。

chore：构建过程或辅助工具的变动。

revert：回滚到上一个版本。

merge：代码合并。

sync：同步主线或分支的Bug。
```

#### `scope` (可选)

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

例如在Angular，可以是location，browser，compile，compile，rootScope， ngHref，ngClick，ngView等。如果你的修改影响了不止一个scope，你可以使用\*代替。

#### `subject` (必须)

subject是commit目的的简短描述，不超过50个字符。
