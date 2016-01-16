'use strict';

const gulp = require('gulp');
const ts = require('gulp-typescript');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const bs = require('browser-sync');
const PATHS = require('./constant').PATHS;

const config = require('../tsconfig.json');

/**
 * @name   transpileTS
 * @desc   Tanspile TypeScript file and remove `src` base folder from directory
 * @return {Stream}
 */
function transpileTS(name, destPath) {
  return gulp.src([
      "./src/**/*.ts",
      "!./src/jspm_packages/**/*",
    ], { since: gulp.lastRun(name) })
    .pipe(plumber({errorHandler: notify.onError("TS compilation failed !")}))
    .pipe(sourcemaps.init())
      .pipe(ts(config.compilerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destPath))
    .pipe(bs.get('server').stream());
}

gulp.task('transpile:dist', () => transpileTS('transpile:dist', PATHS.DIST_PATH));

gulp.task('transpile:tmp', () => transpileTS('transpile:tmp', PATHS.TMP_PATH));
