'use strict';

const gulp = require('gulp');
const del = require('del');
const PATHS = require('./constant').PATHS;

gulp.task('clean:dist', () => del(PATHS.DIST_PATH));

gulp.task('clean:tmp', () => del(PATHS.TMP_PATH));

gulp.task('clean', gulp.parallel(
  'clean:dist',
  'clean:tmp'
));
