#!/bin/sh

browserify -d -t [ babelify ] main.js -o bundle.js
