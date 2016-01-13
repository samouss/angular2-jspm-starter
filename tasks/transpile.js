'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
const bs = require('browser-sync');
const PATHS = require('./constant').PATHS;

// Create TS project for incremental build and load TS configuration
const tsProject = ts.createProject('./tsconfig.json');

/**
 * @name   transpileTS
 * @desc   Tanspile TypeScript file and remove `src` base folder from directory
 * @return {Stream}
 */
function transpileTS(destPath) {
  return tsProject.src()
    .pipe(ts(tsProject))
    .pipe(rename((path) => {
      path.dirname = path.dirname
        .split('/')
        .splice(1)
        .join('/');

      return path;
    }))
    .pipe(gulp.dest(destPath))
    .pipe(bs.get('server').stream())
}

gulp.task('transpile:dist', () => transpileTS(PATHS.DIST_PATH));

gulp.task('transpile:tmp', () => transpileTS(PATHS.TMP_PATH));
