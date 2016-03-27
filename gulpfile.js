'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('scss', function () {
	gulp.src('scss/style.scss')
	.pipe(sass({ outputStyle: 'compressed' })) // extended
	.pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['scss'])
});

gulp.task('default', ['scss', 'watch']);
