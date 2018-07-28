module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'max-len': [
      'error',
      {
        'code': 140
      }
    ],
    'no-console': 'warn',
    'no-undef': 'warn',
    'no-duplicate-case': 'error',
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'camelcase': 'error',
    'comma-dangle': [
      'error',
      'never'
    ],
    'eol-last': [
      'error',
      'always'
    ],
    'computed-property-spacing': [
      'error',
      'never'
    ],
    'func-call-spacing': [
      'error',
      'never'
    ],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': [
      'error',
      'last'
    ],
    'consistent-this': [
      'error',
      'self'
    ],
    'comma-style': [
      'error',
      'last'
    ],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    'no-var': 'error',
    'prefer-const': 'error',
    'brace-style': [
      'error',
      '1tbs',
      {
        'allowSingleLine': true
      }
    ]
  }
};