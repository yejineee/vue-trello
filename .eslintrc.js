module.exports = {
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'pretteir:prettier/recommended'
  ],
  plugins: ['vue', 'import'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  }
};
