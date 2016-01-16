'use strict';

const gulp = require('gulp');
const path = require('path');
const Builder = require('systemjs-builder');
const dependencies = require('../package.json').jspm.dependencies;
const PATHS = require('./constant').PATHS;
const BUNDLE = require('./constant').BUNDLE;

gulp.task('bundle', () => {
  const builder = new Builder(PATHS.TMP_PATH, 'jspm.config.js');

  return builder.buildStatic('index', path.join(PATHS.DIST_PATH, BUNDLE.NAME_BUNDLE), {
    mangle: true,
    sourceMaps: true,
    lowResSourceMaps: true,
    inject: true,
    minify: true,
  });
});
