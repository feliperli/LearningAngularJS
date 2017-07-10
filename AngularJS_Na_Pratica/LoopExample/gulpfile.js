var gulp = require('gulp');
var js = ['.node_modules/angular/angular.min.js', './node_modules/bootstrap/dist/js/bootstrap.min.js'];
var browserSync = require('browser-sync').create();

gulp.task('default', ['watch'], function(){
  gulp.start('dist');
});

gulp.task('watch', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('controllerexample.html', ['dist']).on('change', browserSync.reload);
    gulp.watch('*.js', ['dist']).on('change', browserSync.reload);

});

gulp.task('dist', function() {
  gulp.src(['controllerexample.html'])
  .pipe(gulp.dest('./'));
});
