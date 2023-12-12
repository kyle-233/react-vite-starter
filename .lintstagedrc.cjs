module.exports = {
    "src/**/*.{scss,css}": [
        "prettier --write --parser css",
        "git add --a"
    ],
    "src/**/*.{ts,tsx,js}": [
        "eslint --fix",
        "prettier --write", // 增加
        "git add --a"
    ]
}