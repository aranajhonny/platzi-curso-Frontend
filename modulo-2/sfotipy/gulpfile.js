var gulp = require('gulp')
var stylus = require('gulp-stylus')
var nib = require('nib')
var minify = require('gulp-minify-css')
var connect = require('gulp-connect');
var historyApiFallback = require('connect-history-api-fallback');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');

gulp.task('build', ['styl','watch','webserver'])

gulp.task('styl', function() {
  return gulp.src('stylus/*.styl') // entry point de styl
    .pipe(stylus({ use: nib() })) //inicializo stylus con nib como plugin
    .pipe(minify())
    .pipe(gulp.dest('css/'))
})

gulp.task('watch', function() {
  gulp.watch('./stylus/*.styl', ['styl'])
})

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});