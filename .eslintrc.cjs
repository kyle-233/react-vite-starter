module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
    rules: {
        'import/prefer-default-export': 0,
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': [
            0,
            {
                devDependencies: true,
                peerDependencies: true,
            }
        ],
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ignorePackages: true,
                pattern: {
                    js: 'never',
                    mjs: 'never',
                    jsx: 'never',
                    ts: 'never',
                    tsx: 'never'
                }
            }
        ],
        //import导入顺序规则
        'import/order': [
            'error',
            {
                //按照分组顺序进行排序
                groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'internal', 'object', 'type'],
                //通过路径自定义分组
                pathGroups: [
                    {
                        pattern: 'react*', //对含react的包进行匹配
                        group: 'builtin', //将其定义为builtin模块
                        position: 'before', //定义在builtin模块中的优先级
                    },
                    {
                        pattern: '@components/**',
                        group: 'parent',
                        position: 'before',
                    },
                    {
                        pattern: '@utils/**',
                        group: 'parent',
                        position: 'after',
                    },
                    {
                        pattern: '@apis/**',
                        group: 'parent',
                        position: 'after',
                    },
                ],
                //将react包不进行排序，并放在前排，可以保证react包放在第一行
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always', //每个分组之间换行
                //根据字母顺序对每个组内的顺序进行排序
                // alphabetize: {
                //     order: 'asc',
                //     caseInsensitive: true,
                // },
            },
        ],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            "error",
            { "extensions": [".jsx", ".tsx"] }
        ],
        "no-shadow": "off",
        "react/function-component-definition": ['error', {
            "namedComponents": ["arrow-function", "function-declaration", "function-expression"]
        }]
    },
}
