module.exports = function(config) {
  config.set({

    // Frameworks used with Karma
    frameworks: [
      'mocha',
      'chai',
      'jspm',
    ],

    // Load Angular2 and Babel polyfills
    files: [
      // './.tmp/jspm_packages/npm/angular2@*/bundles/angular2-polyfills.js',
      './node_modules/babel-polyfill/browser.js',
      './node_modules/angular2/bundles/angular2-polyfills.js',
    ],

    // JSPM configurations
    // see in karma.js for this
    jspm: {},

    // Alias for JSPM
    proxies: {
      '/.tmp/': '/base/.tmp/',
      '/jspm_packages/': '/.tmp/jspm_packages/',
    },

    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    logLevel: config.LOG_INFO,
    singleRun: true,
  })
}
