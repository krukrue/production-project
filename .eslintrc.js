module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next"
    ],
    "rules": {
        "react/jsx-indent": [2, 2],
        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", "ts", "tsx"] }],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": "warn",
        "react/react-in-jsx-scope": "off",
        "typescript.format.insertSpaceBeforeFunctionParenthesis": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        // "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "i18next/no-literal-string": ["error", { markupOnly: true }],

    }
}
