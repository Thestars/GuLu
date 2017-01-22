const gulp = require('gulp');

gulp.task('js-admin',function() {
  gulp.src('bower_components/requirejs/require.js').pipe(gulp.dest('js/lib/require.js'))
})
