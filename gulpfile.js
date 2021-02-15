'use strict'

function defaultTask(cb) {
    console.log('Hi, Gulp!');
    cb();
}

exports.default = defaultTask;