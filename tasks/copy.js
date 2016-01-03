'use strict';

const gulp = require('gulp');
const Stream = require('stream');
const mergeStream = require('merge-stream');

function copy(paths) {
  return Object.keys(paths).reduce((acc, path) => {
    return mergeStream(acc, gulp.src(path).pipe(gulp.dest(paths[path])));
  }, gulp.src('.'));
}

gulp.task('copy:static', () => {
  return copy({
    './jspm.config.js': './dist',
    './src/jspm_packages/**/*': './dist/jspm_packages',
  });
});

gulp.task('copy:template', () => {
  return copy({
    './src/**/*.html': './dist',
  });
});

gulp.task('copy', gulp.parallel('copy:static', 'copy:template'));
