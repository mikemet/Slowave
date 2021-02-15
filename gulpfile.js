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

exports.default = defaultTask;
exports.html = htmlTask;