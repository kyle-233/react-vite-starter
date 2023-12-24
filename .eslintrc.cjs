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
        "arrow-body-style": "off",
        "array-callback-return": "off",
        "import/no-absolute-path": [2, { esmodule: false, commonjs: false, amd: false }],
        'import/prefer-default-export': 0,
        'import/no-unresolved': 'off',
        "react/jsx-props-no-spreading": 'off',
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
                groups: ['builtin',
                    'external',
                    ['internal', 'parent', 'sibling', 'index', 'object', 'type'],
                    'unknown'],
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
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always', //每个分组之间换行
                //根据字母顺序对每个组内的顺序进行排序
                // alphabetize: {
                //     order: 'asc',
                //     caseInsensitive: true,
                // },
            },
        ],
        "no-unused-vars": "off",
        "react/require-default-props": "off",
        "react/no-unused-prop-types": "off",
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [
            "error",
            { "extensions": [".jsx", ".tsx"] }
        ],
        "no-shadow": "off",
        "react/function-component-definition": ['error', {
            "namedComponents": ["arrow-function", "function-declaration", "function-expression"]
        }],
        "no-use-before-define": "off",
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/indent': ['off', 2],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-empty-interface': 'error', // codecc
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-unused-vars': 'error', // codecc
        'import/order': 'error',
        'import/extensions': 'off',
        'import/no-named-as-default': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-cycle': 'off', // TODO: turn on this rule later
        'import/no-unresolved': 'off', // TODO: turn on this rule later
        'react/display-name': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/prop-types': 'off',
        'max-len': 'off',
        'no-shadow': 'off',
        'no-console': 'off',
        'no-throw-literal': 'off',
        'no-unused-expressions': 'off',
        'no-bitwise': 'off',
        'no-useless-return': 'off',
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'no-continue': 'off',
        'no-return-assign': 'off',
        'no-restricted-syntax': 'off',
        'no-restricted-globals': 'off',
        'no-unneeded-ternary': 'off',
        'eol-last': 'error', // codecc
        'func-names': 'off',
        'consistent-return': 'off',
        'default-case': 'off',
    },
}
