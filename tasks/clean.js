'use strict';

const gulp = require('gulp');
const del = require('del');

gulp.task('clean:dist', (done) => {
  del.sync('./dist/**/*');
  done();
});

gulp.task('clean', gulp.parallel('clean:dist'));
