var gulp = require('gulp');
var jsonFilesToCopy = require('./config/sourceFiles').jsonFile;
var distBuild = require('./config/sourceFiles').distBuild;
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');

module.exports = function (done) {
    return gulp.src(jsonFilesToCopy)
        .pipe(gulp.dest(distBuild.server));
};
