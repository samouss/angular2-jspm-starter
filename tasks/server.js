'use strict';

const gulp = require('gulp');
const bs = require('browser-sync').create('server');
const argv = require('yargs').argv;

gulp.task('server:reload', done => {
  bs.reload();
  done();
});

gulp.task('server', done => {
  bs.init({
    server: {
      baseDir: './dist',
    },
    open: (argv.open === undefined || argv.open) ? true : false,
  });
  done();
});
