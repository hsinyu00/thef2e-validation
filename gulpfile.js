'use strict';

var gulp = require("gulp"),
  $ = require("gulp-load-plugins")(),
  sass = require("gulp-sass"),
  del = require("del"),
  autoprefixer = require("gulp-autoprefixer");

// Styles
gulp.task('styles', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css'));
});

// Clean
gulp.task('clean', function(cb) {
    del('css/*.css', cb);
});

// Watch
gulp.task('watch', ['styles'], function() {
    $.watch('sass/**/*.scss', function () {
        gulp.start('styles');
    });
});

// Default
gulp.task('default', ['clean'], function() {
    gulp.start('watch');
});