'use strict';

const gulp = require('gulp');
const mergeStream = require('merge-stream');
const glob = require('glob');
const PATHS = require('./constant').PATHS;

function copy(paths) {
  return Object.keys(paths).reduce((acc, path) => {
    return mergeStream(acc, gulp.src(path).pipe(gulp.dest(paths[path])));
  }, gulp.src('.'));
}

/**
 * Dist
 */

gulp.task('copy:dist:static:dev', () => {
  return copy({
    './jspm.config.js': PATHS.DIST_PATH,
    './src/jspm_packages/**/*': `${ PATHS.DIST_PATH }/jspm_packages`,
  });
});

gulp.task('copy:dist:static:prod', () => {
  return copy({
    [glob.sync('./src/jspm_packages/npm/angular2@*/bundles/angular2-polyfills.min.js')[0]]: PATHS.DIST_PATH,
  });
});

gulp.task('copy:dist:template', () => {
  return copy({
    './src/index.html': PATHS.DIST_PATH,
    './src/app/**/*.html': PATHS.DIST_PATH,
  });
});

/**
 * Tmp
 */

gulp.task('copy:tmp:static', () => {
  return copy({
    './jspm.config.js': PATHS.TMP_PATH,
    './src/jspm_packages/**/*': `${ PATHS.TMP_PATH }/jspm_packages`,
  });
});

gulp.task('copy:dist:static', gulp.parallel('copy:dist:static:dev', 'copy:dist:static:prod'))

gulp.task('copy:dist:dev', gulp.parallel('copy:dist:static', 'copy:dist:template'));

gulp.task('copy:dist:prod', gulp.parallel('copy:dist:static:prod', 'copy:dist:template'));

gulp.task('copy:tmp', gulp.parallel('copy:tmp:static'));
