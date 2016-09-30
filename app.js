'use strict'

let path = require('path'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    clone = require('gulp-clone'),
    rename = require('gulp-rename'),
    cleanCss = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps')

let dir = process.env.PWD

console.log(dir)

function smiler(opts) {
    opts = opts || {}
    opts.autoprefixer = opts.autoprefixer !== false
    opts.sourcemaps = opts.sourcemaps !== false

    gulp.task('scss', function() {
        let task = gulp.src(path.join(dir, '**', '*.scss'))

        if (opts.sourcemaps) {
            task = task.pipe(sourcemaps.init())
        }

        task = task.pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))

        if (opts.autoprefixer) {
            task = task.pipe(autoprefixer({
                browsers: ['> 1%', 'last 10 versions', 'IE >= 9'],
                cascade: false
            }))
        }

        let minTask = task.pipe(clone())

        if (opts.sourcemaps) {
            task = task.pipe(sourcemaps.write('./'))
        }

        task = task.pipe(gulp.dest(path.join(dir, 'public'))).on('error', (err) => {
            console.error(err)
        })

        task = minTask

        task = task.pipe(cleanCss()).pipe(rename({ extname: '.min.css' }))

        if (opts.sourcemaps) {
            task = task.pipe(sourcemaps.write('./'))
        }

        task = task.pipe(gulp.dest(path.join(dir, 'public')))

        return task
    })

    gulp.start('scss')
}

module.exports = smiler
