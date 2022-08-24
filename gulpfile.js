//const gulp = require('gulp');
const { src, dest, series } = require('gulp');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
//const watch = require('gulp');
//const livereload = require('gulp-livereload');


function js() {
	return src('js/*.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat('index-min.js'))
		.pipe(dest('output/'));
}

function css() {
	return src('scss/*.scss')
		.pipe(sass())
		.pipe(concat('index.css'))
		.pipe(dest('output/'));
		//.pipe(livereload({ start: true }));
}


// gulp.task('watch', function () {
// 	livereload.listen();
// 	gulp.watch('scss/*.scss', ['scss']);
// });

exports.default = series(js, css);

