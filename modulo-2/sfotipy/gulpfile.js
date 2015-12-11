var gulp = require('gulp')
var stylus = require('gulp-stylus')
var nib = require('nib')
var minify = require('gulp-minify-css')
var serve = require('gulp-serve');

gulp.task('build', ['styl', 'serve'])

gulp.task('styl', function() {
  return gulp.src('stylus/*.styl') // entry point de styl
    .pipe(stylus({ use: nib() })) //inicializo stylus con nib como plugin
    .pipe(minify())
    .pipe(gulp.dest('css/'))
})

gulp.task('serve', serve('./'));
gulp.task('serve-prod', serve({
  root: ['./'],
  port: 80,
  middleware: function(req, res) {
    // custom optional middleware 
  }
}));