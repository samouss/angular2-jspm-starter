'use strict';

const gulp = require('gulp');
const htmlReplace = require('gulp-html-replace');
const path = require('path');
const PATHS = require('./constant').PATHS;
const BUNDLE = require('./constant').BUNDLE;

gulp.task('template', () => {
  return gulp.src([
      path.join(PATHS.DIST_PATH, 'index.html'),
    ])
    .pipe(htmlReplace({
      'js': `./${ BUNDLE.NAME_BUNDLE }`,
    }))
    .pipe(gulp.dest(path.join(PATHS.DIST_PATH)))
});
