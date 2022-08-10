const { src, dest, series, watch } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
//const watch = require('gulp');


function js() {
	return src('js/*.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(dest('output/'));
}

function css() {
	return src('scss/*.scss')
		.pipe(sass())
		.pipe(concat('index.css'))
		.pipe(dest('output/'));
}

function watch() {
	gulp.watch(['scss/*.scss'], css);
}


exports.default = series(js, css, watch);

