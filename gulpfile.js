
/* ************************************************************************** */

/**
 * Gulpfile for Joose Full Screen Navigation Component
 */

'use strict';

/* ************************************************************************** */

/* GULP CONFIG */

/* Dependencies */

// gulp itself
var gulp = require('gulp');

// css
var sass = require('gulp-sass');

// js
// var babel = require('gulp-babel');
// var eslint = require('gulp-eslint');

// compilation utilities
var sourcemaps = require('gulp-sourcemaps');
// var concat = require('gulp-concat');
// var browserify = require('browserify');

// helpers
var watch = require('gulp-watch');

/* ************************************************************************** */

/* Variables */
var allFilesInAllFolders = '/**/*';
var directories = {
    cssSrc: './src/css',
    cssDist: './dist/css',
    jsSrc: './src/css',
    jsDist: './dist/js'
}
var files = {
    cssDist: 'style.css',
    jsDist: 'full-screen-nav.min.js'
}
var fileExtensions = {
    sass: '.scss',
    js: '.js'
}

/* ************************************************************************** */

/* CSS */

/**
 * Task to compile Sass
 */
gulp.task('sass', function() {
    return gulp.src( directories.cssSrc + allFilesInAllFolders + fileExtensions.sass )
        .pipe( sourcemaps.init() )
        .pipe(
            sass({
                includePaths: [
                    './node_modules/reset-css'
                ],
                outputStyle: 'compressed'
            })
            .on('error', sass.logError)
        )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( directories.cssDist ) );
});

/* ************************************************************************** */

/* JS */

// to add source maps

/*
gulp.task("js", ['eslint'], function () {
  browserify("app/src/js/app.js")
    .transform('babelify', {presets: ["es2015", "react"]})
    .bundle()
    .pipe(fs.createWriteStream("app/dist/js/app.js"));
});

// es2015 linting
gulp.task('eslint', function() {
    return gulp.src(['app/src/js/** /*.babel.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});
*/

/* ************************************************************************** */

/* PROCESSING */

/**
 * Task to watch for changes in files and trigger events
 */
gulp.task('watch', function() {

    // watch for css changes
    watch(
        [
            directories.cssSrc + allFilesInAllFolders + fileExtensions.sass
        ],
        function() {
            gulp.start('sass');
        }
    );

    // watch for js changes
    /* watch(['app/src/js/** /*.js'], function() {
        gulp.start('js');
    });*/

});

/* ************************************************************************** */