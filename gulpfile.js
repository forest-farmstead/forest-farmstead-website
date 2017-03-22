'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var shell = require('gulp-shell')
var child = require('child_process');

var browserify = require('browserify');
var reactify = require('reactify');
var babelify = require('babelify');
var jade = require('gulp-jade');
var jekyll = require('gulp-jekyll');

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
  var templates = ['./**/*.jade',
                   '!./build/**/**.*',
                   '!./includes/*.jade',
                   '!./resources/**/**.*',
                   '!./blog/**/**.*'];
  var LOCALS = {};

  gulp.src(templates)
    .pipe(jade({
      locals: LOCALS
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('templates-blog', function() {
  var templates = ['./blog/layouts/**/*.jade']
  var LOCALS = {};

  gulp.src(templates)
    .pipe(jade({
      locals: LOCALS
    }))
    .pipe(gulp.dest('./blog/_layouts/'));
});

gulp.task('css', function() {
  gulp.src('css/**/**.*')
    .pipe(gulp.dest('build/css'));
});

gulp.task('thumbnails', shell.task([
  'cd images/gallery && ./thumbnail_generate.sh'
]));

gulp.task('gallery-resize', shell.task([
  'cd images/gallery && ./image_resize.sh'
]));

gulp.task('images-deploy', ['thumbnails', 'gallery-resize'], function() {
  gulp.src('images/**/**.*')
    .pipe(gulp.dest('build/images'));
});

gulp.task('images', function() {
  gulp.src('images/**/**.*')
    .pipe(gulp.dest('build/images'));
});

gulp.task('resources', function() {
  gulp.src('resources/**/**.*')
    .pipe(gulp.dest('build/resources'));
});

gulp.task('jekyll', ['templates-blog'], function() {
  var jekyll = child.spawn('jekyll', ['build']);
  var jekyllLogger = function(buf) {
    buf.toString()
      .split(/\n/)
      .forEach(function(msg) {gutil.log('Jekyll: ' + msg);});
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('default', ['jekyll', 'templates', 'javascript', 'css', 'images', 'resources']);

gulp.task('build', ['jekyll', 'templates', 'javascript', 'css', 'images-deploy', 'resources']);
