'use strict';

const _ = require('lodash');
const gulp = require('gulp');
const path = require('path');
const Server = require('karma').Server;
const argv = require('yargs').argv;

const jspmConfig = {
  baseURL: './.tmp',
  config: 'jspm.config.js',
  loadFiles: [
    '.tmp/**/*.spec.js',
  ],
  serveFiles: [
    '.tmp/**/!(*.spec).js',
  ],
};

function buildServer(options, done) {
  return new Server(_.assign({
    configFile: path.join(__dirname + '/../karma.conf.js')
  }, options), () => {
    done();
    process.exit();
  });
}

/**
 * Run test once and exit
 */
gulp.task('karma:watch', (done) => {
  const fileOveride = (argv.file) ? { loadFiles: [argv.file] } : {};

  const server = buildServer(_.assign({
    singleRun: false,
    watch: true,
    jspm: _.assign(jspmConfig, fileOveride),
  }), done);

  server.on('run_complete', (browser, results) => {
    console.log('complete');
    // if (results.error) {
    //   gulp.src('').pipe(notify('Test failed !'));
    // }
  });

  server.start();
});

/**
 * Run test once and exit
 */
gulp.task('karma', (done) => {
  const server = buildServer({ jspm: jspmConfig }, done);
  server.start();
});
