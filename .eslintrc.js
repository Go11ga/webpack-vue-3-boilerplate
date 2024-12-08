module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: [
    'build/',
    'coverage/',
    'node_modules/',
    'src/vendors/',
    'tests/',
  ],
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    'vue/html-button-has-type': 'off',
    'no-plusplus': 'off',
    'vue/no-v-html': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'vue/max-len': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    indent: 'off',
    'vue/html-indent': 0,
    'linebreak-style': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-tabs': 0,
    'vue/no-unused-components': 'warn',
    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: true,
      },
    ],
  },
};
