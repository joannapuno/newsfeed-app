'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-dart-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/styles/sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/css'));
});
 
gulp.task('watch', async function () {
  gulp.watch('./src/styles/sass/**/*.scss', gulp.series('sass'));
});