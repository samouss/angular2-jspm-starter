'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');

// Create TS project for incremental build and load TS configuration
const tsProject = ts.createProject('./tsconfig.json');

function transpileTS() {
  return tsProject.src()
    .pipe(ts(tsProject))
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest('./dist'));
}

gulp.task('transpile:ts', transpileTS);

gulp.task('transpile', gulp.parallel('transpile:ts'));
