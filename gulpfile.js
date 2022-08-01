const { src, dest, series } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));

function js() {
	return src('js/*.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(dest('output/'));
}

function css() {
	return src('scss/*.scss')
		.pipe(sass())
		.pipe(dest('output/'));
}

exports.default = series(js, css);

