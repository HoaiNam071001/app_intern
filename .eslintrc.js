module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'no-console': 1,
        'no-unused-vars': 1,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-no-duplicate-props': 1,
        'react/react-in-jsx-scope': 1,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'max-len': ['error', 180],
        'no-restricted-properties': 0,
        'no-use-before-define': 0,
        'react/forbid-prop-types': 0,
        'react/destructuring-assignment': 0,
        'no-underscore-dangle': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-array-index-key': 0,
        'react/jsx-wrap-multilines': 0,
        'operator-linebreak': 0,
        'react/jsx-one-expression-per-line': 0,
        'no-shadow': 0,
        'array-callback-return': 0,
        'consistent-return': 0,
        'no-return-assign': 0,
        'no-plusplus': 0,
        'react/state-in-constructor': 0,
        radix: 0,
        'no-async-promise-executor': 0,
        'import/no-cycle': 0,
        'import/no-self-import': 0,
        'import/prefer-default-export': 0,
        'react/no-unescaped-entities': 0,
        'react/button-has-type': 0,
        'no-param-reassign': 0,
        'no-mixed-operators': 0,
        'no-unused-expressions': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        camelcase: [1, { properties: 'never', ignoreDestructuring: true }],
        'class-methods-use-this': 0,
    },
};
