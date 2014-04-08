var gulp = require('gulp'),
    closurify = require('closurify');

gulp.task('build', function() {
    gulp.src('src/**/*.js')
        .pipe(closurify({baseUrl: './'}))
        .pipe(gulp.dest('./build'));
});
