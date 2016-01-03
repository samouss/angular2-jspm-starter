'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
const bs = require('browser-sync');

// Create TS project for incremental build and load TS configuration
const tsProject = ts.createProject('./tsconfig.json');

/**
 * @name   transpileTS
 * @desc   Tanspile TypeScript file and remove `src` base folder from directory
 * @return {Stream}
 */
function transpileTS() {
  return tsProject.src()
    .pipe(ts(tsProject))
    .pipe(rename((path) => {
      path.dirname = path.dirname
        .split('/')
        .splice(1)
        .join('/');

      return path;
    }))
    .pipe(gulp.dest('./dist'))
    .pipe(bs.get('server').stream())
}

gulp.task('transpile:ts', transpileTS);

gulp.task('transpile', gulp.parallel('transpile:ts'));
