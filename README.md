<p align="center">
  <img src="./angular2xjspm.png" alt="Angular2 JSPM starter" />
</p>

# Angular 2 JSPM starter [![devDependency Status](https://david-dm.org/samouss/angular2-jspm-starter/dev-status.svg?style=flat-square)](https://david-dm.org/samouss/angular2-jspm-starter#info=devDependencies)

Angular 2 starter build with [JSPM](https://github.com/jspm/jspm-cli), [Gulp 4](https://github.com/gulpjs/gulp/tree/4.0), [TypeScript](https://github.com/Microsoft/TypeScript), [Karma](https://github.com/karma-runner/karma), [Mocha](https://github.com/mochajs/mocha), [Chaï](https://github.com/chaijs/chai).

## Installation

Clone the repository and then run the following command:

```
npm install
```

## Run the application

For build the dev application and launch a server in watch mode on `localhost:3000`:

```
npm start -- [options]
```
> --no-open: avoid to open new window in your browser  
> --port: specify which port you want use

## Bundle the application

For build your application for production:

```
npm run build
```

For build your application for production and run a server:

```
npm start:prod
```

## Run the test for your application

Your tests will be executed in single run mode:

```
npm test
```

For run in watch mode:

```
npm test:watch
```

## Run a command

If you want to run a specific command:

```
npm run gulp [command_name] -- [options]
```

List all commands availables:

```
npm run gulp -- --tasks-simple
```
