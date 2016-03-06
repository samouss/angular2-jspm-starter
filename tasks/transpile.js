'use strict';

const gulp = require('gulp');
const _ = require('lodash');
const ts = require('gulp-typescript');
const tslint = require('gulp-tslint');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const bs = require('browser-sync');
const PATHS = require('./constant').PATHS;

const files = [
  "./src/**/*.ts",
  "!./src/jspm_packages/**/*",
];
const config = require('../tsconfig.json');

/**
* @name   transpileTS
* @desc   Tanspile TypeScript file
* @return {Stream}
*/
function transpileTS(name, destPath) {
  return function transpileTS() {
    return gulp.src(files)
      .pipe(changed(destPath, { extension: '.js' }))
      .pipe(plumber({errorHandler: notify.onError("TS compilation failed !")}))
      .pipe(sourcemaps.init())
      .pipe(ts(_.assign({}, config.compilerOptions, { typescript: require('typescript') })))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(destPath))
      .pipe(bs.get('server').stream());
  }
}

/**
 * @name   lintTS
 * @desc   Lint TypeScript file
 * @return {Stream}
 */
function lintTS(name) {
  return function lintTS() {
    return gulp.src(files.concat('!./src/typings/**/*'), { since: gulp.lastRun(name) })
      .pipe(plumber({errorHandler: notify.onError("TS linting failed !")}))
      .pipe(tslint({
        tslint: require('tslint'),
      }))
      .pipe(tslint.report('prose'));
  };
}

gulp.task('lintTS', lintTS('lintTS'));

gulp.task('transpile:dist', gulp.series('lintTS', transpileTS('transpile:dist', PATHS.DIST_PATH)));

gulp.task('transpile:tmp', gulp.series('lintTS', transpileTS('transpile:tmp', PATHS.TMP_PATH)));
