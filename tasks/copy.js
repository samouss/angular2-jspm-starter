'use strict';

const gulp = require('gulp');
const Stream = require('stream');
const mergeStream = require('merge-stream');

const paths = {
  './jspm.config.js': './dist',
  './src/jspm_packages/**/*': './dist/jspm_packages',
  './src/**/*.html': './dist',
};

gulp.task('copy', () => {
  return Object.keys(paths).reduce((acc, path) => {
    return mergeStream(acc, gulp.src(path).pipe(gulp.dest(paths[path])));
  }, gulp.src('.'));
});
