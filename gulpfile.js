'use strict';

const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

new HubRegistry(['./tasks/*.js']);

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('transpile', 'copy')
));

gulp.task('start', gulp.series(
  'default',
  'server',
  'watch'
));
