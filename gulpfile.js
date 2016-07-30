'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require('babelify');
var jade = require('gulp-jade');

gulp.task('javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: './main.js',
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [babelify]
  });

  return b.bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('css', function() {
  gulp.src('css/**/**.*')
    .pipe(gulp.dest('build/css'));
});

gulp.task('images', function() {
  gulp.src('images/**/**.*')
    .pipe(gulp.dest('build/images'));
});

gulp.task('default', ['templates', 'javascript', 'css', 'images']);
