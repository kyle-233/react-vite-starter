module.exports = {
    root: true,
    extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
    rules: {
        indentation: 2,
        'function-url-quotes': 'never',
        // "selector-class-pattern": '^[a-z0-9]+(-[a-z0-9]+)*$',
        // "dollar-variable-pattern": [new RegExp('[a - z][a - zA - Z] + /*'), { "ignore": "global" }],
    }
}