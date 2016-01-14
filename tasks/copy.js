'use strict';

const gulp = require('gulp');
const mergeStream = require('merge-stream');
const PATHS = require('./constant').PATHS;

function copy(paths) {
  return Object.keys(paths).reduce((acc, path) => {
    return mergeStream(acc, gulp.src(path).pipe(gulp.dest(paths[path])));
  }, gulp.src('.'));
}

gulp.task('copy:dist:static', () => {
  return copy({
    './jspm.config.js': PATHS.DIST_PATH,
    './src/jspm_packages/**/*': `${ PATHS.DIST_PATH }/jspm_packages`,
  });
});

gulp.task('copy:dist:template', () => {
  return copy({
    './src/index.html': PATHS.DIST_PATH,
    './src/app/**/*.html': PATHS.DIST_PATH,
  });
});

gulp.task('copy:tmp:static', () => {
  return copy({
    './jspm.config.js': PATHS.TMP_PATH,
    './src/jspm_packages/**/*': `${ PATHS.TMP_PATH }/jspm_packages`,
  });
});

gulp.task('copy:dist', gulp.parallel('copy:dist:static', 'copy:dist:template'));

gulp.task('copy:tmp', gulp.parallel('copy:tmp:static'));
