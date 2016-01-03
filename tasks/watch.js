'use strict';

const gulp = require('gulp');

gulp.task('watch', () => {

  gulp.watch('./src/**.ts', gulp.series('transpile:ts'));

  gulp.watch('./src/**.html', gulp.series('copy:template', 'server:reload'));

});
