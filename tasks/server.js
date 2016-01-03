'use strict';

const gulp = require('gulp');
const bs = require('browser-sync').create('server');

gulp.task('server:reload', done => {
  bs.reload();
  done();
});

gulp.task('server', done => {
  bs.init({
    server: {
      baseDir: './dist',
    },
  });
  done();
});
