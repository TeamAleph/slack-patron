var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var less = require('gulp-less');
var gutil = require('gulp-util');

var jsSrc = 'public/src/js/*.js';
var jsDist = 'public/dist/js/';
var cssSrc = 'public/src/css/*.less';
var cssDist = 'public/dist/css';

gulp.task('babel', function() {
  return gulp.src(jsSrc)
    .pipe(concat('app.js'))
    .pipe(babel())
    .on('error', function(e) {
      gutil.log(gutil.colors.red(e));
      this.emit('end');
    })
    .pipe(gulp.dest(jsDist));
});

gulp.task('less', function() {
  return gulp.src(cssSrc)
    .pipe(concat('app.css'))
    .pipe(less())
    .on('error', function(e) {
      gutil.log(gutil.colors.red(e));
      this.emit('end');
    })
    .pipe(gulp.dest(cssDist));
});

gulp.task('watch', function(){
  gulp.watch(jsSrc, ['babel']);
  gulp.watch(cssSrc, ['less']);
});

gulp.task('default', ['babel', 'less'], function() {
});