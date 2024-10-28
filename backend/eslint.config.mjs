// eslint.config.mjs
import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Include existing browser globals
        process: true,      // Add process as a global
        __dirname: true,    // Add __dirname if you use it
        __filename: true,   // Add __filename if you use it
      },
    },
    rules: {
      quotes: [ 2, 'single', { avoidEscape: true } ],
      'no-console': 0,
      'comma-dangle': [ 2, 'always-multiline' ],
      indent: [ 2, 2 ],
      semi: [ 2, 'always' ],
      'object-curly-spacing': [ 2, 'always' ],
      'array-bracket-spacing': [ 2, 'always' ],
      'no-trailing-spaces': 2,
      'no-unused-vars': [ 2, { vars: 'all', args: 'none', ignoreRestSiblings: false } ],
      'no-undef': 2, // Enable no-undef rule
      'max-len': [ 'warn', { code: 120 } ], // Set your preferred max line length
      'no-plusplus': 'warn',
      'no-global-assign': 'error',
    },
  },
  pluginJs.configs.recommended,
];
