var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('default', function() {
    // place code for your default task here
});

gulp.task('js', function () {
    gulp.src('src/js/optionSwap.js')
        .pipe(gulp.dest('dist/js/'))
        .pipe(concat('optionSwap.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});