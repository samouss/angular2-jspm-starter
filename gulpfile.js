'use strict';

const gulp = require('gulp');
const HubRegistry = require('gulp-hub');

const hub = new HubRegistry(['./tasks/*.js']);

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('transpile:dist', 'copy:dist')
));

gulp.task('start', gulp.series(
  'default',
  'server',
  'watch'
));

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('transpile:tmp', 'copy:tmp'),
  gulp.parallel('bundle', 'copy:dist:template'),
  gulp.parallel('template', 'clean:tmp')
));
