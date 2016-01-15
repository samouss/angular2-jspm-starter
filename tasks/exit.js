'use strict';

const gulp = require('gulp');

gulp.task('exit', (done) => {
  done();
  process.exit();
});
