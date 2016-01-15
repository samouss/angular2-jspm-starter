'use strict';

const gulp = require('gulp');
const notify = require('gulp-notify');
const bs = require('browser-sync').create('server');
const argv = require('yargs').argv;
const PATHS = require('./constant').PATHS;

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
    port: (argv.port) ? argv.port : 3000,
  });
  done();
});

bs.emitter.on('init', () => gulp.src('.').pipe(notify('Server is running!')));
