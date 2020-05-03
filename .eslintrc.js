module.exports = {
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'max-len': ['error', 250],
    curly: 'error',
    camelcase: ['error', { properties: 'never' }],
    'no-trailing-spaces': ['error'],
    'no-irregular-whitespace': ['error'],
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};