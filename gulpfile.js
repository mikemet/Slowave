'use strict'

const {
    src,
    dest
} = require('gulp');

function defaultTask(cb) {
    console.log('Hi, Gulp!');
    cb();
}

function htmlTask(cb) {
    return src('src/*.html')
        .pipe(dest('public/'));
}

function jsTask(cb) {
    return src('src/js/*.js')
        .pipe(dest('public/js'));
}

exports.default = defaultTask;
exports.html = htmlTask;
exports.js = jsTask;