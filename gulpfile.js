'use strict'

const {
    series
} = require('gulp');

const {
    src,
    dest
} = require('gulp');

const {
    uglify
} = require('gulp-uglify');
const {
    rename
} = require('gulp-rename');

function defaultTask(cb) {
    console.log('Hi, Gulp!');
    cb();
}

function htmlTask(cb) {
    return src('src/*.html')
        .pipe(dest('public/'));
    cb();
}

function js(cb) {
    return src('src/js/*.js')
        .pipe(dest('public/js'));
    cb();
}

function css(cb) {
    return ('src/sass/*.scss')
        .pipe(dest('publlic/css'));
    cb();
}

exports.default = defaultTask;
exports.html = htmlTask;
//exports.js = jsTask;
//exports.sass = sassTask;
exports.build = series(js, css);