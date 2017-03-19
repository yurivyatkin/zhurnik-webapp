module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore',
    }],
  },
  'extends': [
    'standard',
    'standard-react',
  ],
  'plugins': [
    'promise',
    'react',
  ],
  'env': {
    'browser': true,
  },
}
