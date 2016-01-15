'use strict';

const gulp = require('gulp');
const excludes = ['!./src/jspm_packages/**'];

gulp.task('watch', (done) => {

  gulp.watch(['./src/**/*.ts'].concat(excludes), gulp.series('transpile:dist'));

  gulp.watch(['./src/**/*.html'].concat(excludes), gulp.series('copy:dist:template', 'server:reload'));

  done();

});

gulp.task('watch:test', (done) => {

  gulp.watch('./src/**/*.ts', gulp.series('transpile:tmp'));

  done();

});
