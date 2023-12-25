module.exports = {
    root: true,
    extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
    rules: {
        indentation: 2,
        'function-url-quotes': 'never',
        'keyframes-name-pattern': null,
        "selector-pseudo-class-no-unknown": [true, ":global"]
        // "selector-class-pattern": null,
        // "dollar-variable-pattern": null,
    }
}