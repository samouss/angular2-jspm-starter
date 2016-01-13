'use strict';

const gulp = require('gulp');
const bs = require('browser-sync').create('server');
const argv = require('yargs').argv;
const PATHS = require('./paths').PATHS;

gulp.task('server:reload', done => {
  bs.reload();
  done();
});

gulp.task('server', done => {
  bs.init({
    server: {
      baseDir: PATHS.DIST_PATH,
    },
    open: (argv.open === undefined || argv.open) ? true : false,
  });
  done();
});
