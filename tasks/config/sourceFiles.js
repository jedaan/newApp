'use strict';
let srcFolder = 'src';

let jsonFile = [srcFolder + '/server/*.json'];
let sassFiles = [
  srcFolder + '/styles/*.scss',
  srcFolder + '/styles/**/*.scss',
  srcFolder + '/styles/*.css',
  srcFolder + '/styles/**/*.css'
];

let sassFilesToWatch = [
  srcFolder + '/**/styles/*.scss',
  srcFolder + '/**/styles/**/*.scss',
  srcFolder + '/**/styles/*.css',
  srcFolder + '/**/styles/**/*.css'
];
let assetsFiles = [
  srcFolder + '/assets/**/*',
  srcFolder + '/assets/images/**/*'
];

let pureCopy = [srcFolder + '/assets/**/*'];
let jsClientFiles = [srcFolder + '/*/**/*.js', srcFolder + '/*/*.js'];

let coreFiles = [
  srcFolder + '/**/*.json',
  srcFolder + '/**/*.html',
  srcFolder + '/**/*.js',
  srcFolder + '/**/*.css',
  '!' + srcFolder + '/**/*.scss'
];
let distBuild = {
  server: 'dist/server',
  public: 'dist/public'
};

let serverFilesToCopy = [
  'server/**/*',
  '!server/**/*.json',
  '!' + 'server/client/**/*'
];

let serverFiles = ['server/**/*', 'server/*'];

let translationFiles = [srcFolder + '/translations/widget/*.json'];
module.exports = {
  jsClientFiles,
  coreFiles,
  assetsFiles,
  sassFiles,
  pureCopy,
  serverFilesToCopy,
  serverFiles,
  distBuild,
  translationFiles,
  sassFilesToWatch,
  jsonFile
};
