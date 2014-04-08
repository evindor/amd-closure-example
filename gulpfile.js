var gulp = require('gulp'),
    closurify = require('gulp-amd-to-closure');

gulp.task('build', function() {
    gulp.src('src/**/*.js')
        .pipe(closurify({baseUrl: './'}))
        .pipe(gulp.dest('./build'));
});
