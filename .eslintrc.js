module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['alloy', 'alloy/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    parser: '@babel/eslint-parser',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaVersion: 2017,
    requireConfigFile: false,
    sourceType: 'module',
  },
  rules: {
    // // 这里可以根据需要对 airbnb 的规则进行修改，此处仅为示例
    // eqeqeq: ['warn', 'always'],
    // radix: ['warn', 'as-needed'],
    // 'array-callback-return': 'warn',
    // 'jsx-a11y/click-events-have-key-events': 0,
    // 'jsx-a11y/no-static-element-interactions': 0,
    // 'max-len': ['error', { code: 300 }],
    // 'react/react-in-jsx-scope': 'off',
    // 'react/destructuring-assignment': 0,
    // 'linebreak-style': 0,
    // 'prefer-destructuring': 0,
    // 'prefer-const': 0,
    // 'one-var': 0,
    // 'comma-dangle': ['error', {
    //   arrays: 'only-multiline',
    //   objects: 'always-multiline',
    //   imports: 'only-multiline',
    //   exports: 'only-multiline',
    //   functions: 'ignore',
    // }],
    // 'no-console': 1,
    // 'import/no-named-as-default': 0,
    // 'import/prefer-default-export': 0,
    // 'import/no-named-as-default-member': 0,
    // 'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    // 'react/prop-types': 0,
    // 'react/forbid-prop-types': 0,
    // 'react/jsx-props-no-spreading': 0,
    // 'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    // 'jsx-a11y/anchor-is-valid': 0,

    // // VSCode 的 ESLint 扩展插件暂时无法正确修复这条规则带来的错误
    // 'react/jsx-one-expression-per-line': 0,
  },
}
