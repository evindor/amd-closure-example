var gulp = require('gulp'),
    closurify = require('closurify'),
    closureDeps = require('gulp-closure-deps'),
    closureCompiler = require('gulp-closure-compiler');

gulp.task('transform', function() {
    gulp.src(['src/**/*.js', 'aloha/src/functions.js'])
        .pipe(closurify({baseUrl: './'}))
        .pipe(closureDeps({
            fileName: 'deps.js',
            prefix: '../../../'
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('compile', function() {
    gulp.src('build/**/*.js')
        .pipe(closureCompiler())
        .pipe(gulp.dest('./compiled'));
});

gulp.task('build', ['transform', 'compile'])
