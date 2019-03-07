'use strict';
let srcFolder = 'src';
let clientFolder = 'server/client';

let jsonFile = [
    srcFolder + '/server/*.json'
];
let sassFiles = [
    srcFolder + '/index/styles/*.scss',
    srcFolder + '/index/styles/**/*.scss',
    srcFolder + '/index/styles/*.css',
    srcFolder + '/index/styles/**/*.css',
];
let sassFilesMobile = [
    srcFolder + '/mobile/styles/*.scss',
    srcFolder + '/mobile/styles/**/*.scss',
    srcFolder + '/mobile/styles/*.css',
    srcFolder + '/mobile/styles/**/*.css',
];
let sassFilesAction = [
    srcFolder + '/actions/styles/*.scss',
    srcFolder + '/actions/styles/**/*.scss',
    srcFolder + '/actions/styles/*.css',
    srcFolder + '/actions/styles/**/*.css',
];
let sassFilesToWatch = [
    srcFolder + '/**/styles/*.scss',
    srcFolder + '/**/styles/**/*.scss',
    srcFolder + '/**/styles/*.css',
    srcFolder + '/**/styles/**/*.css'
];
let assetsFiles = [
    srcFolder + '/assets/**/*',
    srcFolder + '/assets/images/**/*'];

let pureCopy = [
    srcFolder + '/assets/**/*',
    srcFolder + '/views/**/*.html',
    srcFolder + '/views/*/directives/*.html'
];
let jsClientFiles = [
    srcFolder + '/*/**/*.js',
    srcFolder + '/*/*.js',
];


let coreFiles = [
    srcFolder + '/**/*.json',
    srcFolder + '/**/*.html',
    srcFolder + '/**/*.js',
    srcFolder + '/**/*.css',
    '!' + srcFolder + '/**/*.scss'
];
let ejsFiles = [
    srcFolder + '/views/*.ejs'
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

let serverFiles = [
    'server/**/*',
    'server/*',
];

let translationFiles = [
    srcFolder + '/translations/widget/*.json'
];
module.exports = {
    jsClientFiles,
    coreFiles,
    assetsFiles,
    sassFiles,
    pureCopy,
    serverFilesToCopy,
    serverFiles,
    ejsFiles,
    distBuild,
    translationFiles,
    sassFilesToWatch,
    sassFilesMobile,
    sassFilesAction,
    jsonFile
};
