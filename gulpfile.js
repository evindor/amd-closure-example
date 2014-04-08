var gulp = require('gulp'),
    closurify = require('closurify'),
    closureDeps = require('gulp-closure-deps'),
    closureCompiler = require('gulp-closure-compiler'),
    connect = require('gulp-connect');

gulp.task('transform', function() {
    gulp.src(['src/**/*.js'])
        .pipe(closurify({baseUrl: './'}))
        .pipe(gulp.dest('./build'))
        .pipe(closureDeps({
            fileName: 'deps.js',
            prefix: '../../../'
        }))
        .pipe(gulp.dest('./build'));

    gulp.src(['aloha/src/**/*.js'])
        .pipe(closurify({baseUrl: './'}))
        .pipe(gulp.dest('./build/aloha'))
        .pipe(closureDeps({
            fileName: 'deps.js',
            prefix: '../../../'
        }))
        .pipe(gulp.dest('./build/aloha'));
});

//gulp.task('compile', function() {
    //gulp.src('build/**/*.js')
        //.pipe(closureCompiler())
        //.pipe(gulp.dest('./compiled'));
//});

//gulp.task('build', ['transform', 'compile'])

gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['transform']);
    gulp.watch('aloha/src/**/*.js', ['transform']);
});

gulp.task('server', function() {
    connect.server({
        port: 8001
    });
});

gulp.task('default', ['server', 'watch']);
