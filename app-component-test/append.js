const concat=require('concat');

concat(
  [
    'dist/app-component-test/main.js',
    'dist/app-component-test/polyfills.js',
    'dist/app-component-test/runtime.js'
  ],
  'dist/app-component-test/elements.js'
)
