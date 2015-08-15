# gulp-lzmajs

[![](http://img.shields.io/npm/dm/gulp-lzmajs.svg?style=flat)](https://www.npmjs.org/package/gulp-lzmajs) [![](http://img.shields.io/npm/v/gulp-lzmajs.svg?style=flat)](https://www.npmjs.org/package/gulp-lzmajs)
[![License](https://img.shields.io/npm/l/hprose.svg)](http://opensource.org/licenses/MIT)

> Minify JavaScript with LZMA-JS.

## Installation

Install package with NPM and add it to your development dependencies:

`npm install --save-dev gulp-lzmajs`

## Usage

```javascript
var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    lzmajs = require('gulp-lzmajs');

gulp.task('compress', function() {
  return gulp.src('lib/*.js')
             .pipe(concat('all.min.js'))
             .pipe(uglify())
             .pipe(lzmajs(9))
             .pipe(gulp.dest('dist'));
});
```

## Errors

`gulp-lzmajs` emits an 'error' event if it is unable to minify a specific file.
Wherever popssible, the PluginError object will contain the following properties:

- `fileName`
- `lineNumber`
- `message`

To handle errors across your entire pipeline, see the
[gulp](https://github.com/gulpjs/gulp/blob/master/docs/recipes/combining-streams-to-handle-errors.md#combining-streams-to-handle-errors) documentation.

## Example

[hprose-html5](https://github.com/hprose/hprose-html5)
