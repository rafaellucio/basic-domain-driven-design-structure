const gulp = require('gulp');
const del = require('del');
const sourcemaps = require('gulp-sourcemaps');
const hash = require('gulp-hash-filename');
const gulpif = require('gulp-if');
/* Scripts */
const babel = require('gulp-babel');
const concat = require('gulp-concat');
/* Images */
const imagemin = require('gulp-imagemin');
/* Stylesheet */
const sass = require('gulp-sass');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
/* HTML  */
const useref = require('gulp-useref');

const paths = {
    index: 'app/*.html',
    scripts: [
        'app/scripts/**/*.js', 
        '!node_modules/**/*.js'
    ],
    images: [
        'app/images/**/*', 
        '!node_modules/**/*'
    ],
    stylesheets: [
        'app/stylesheets/**/*.scss', 
        'app/stylesheets/**/*.css', 
        '!node_modules/**/*.scss', 
        '!node_modules/**/*.css'
    ],
    destination: ['build']
};

gulp.task('index', () => {
    return gulp.src(paths.index)
        .pipe(useref())
        .pipe(gulp.dest(paths.destination.join('')))
});

gulp.task('images', ['clean'], () => {
  return gulp.src(paths.images) 
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(paths.destination.concat('/images').join('')));
});

gulp.task('sass', () => {
    return gulp.src(paths.stylesheets)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.destination.concat('/stylesheets').join('')));
});

gulp.task('sass:watch', () => {
  gulp.watch('./stylesheets/**/*.scss', ['sass']);
});

gulp.task('scripts', ['clean'], () => {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(babel({
                presets: ['es2015']
            }))
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.destination.concat('/scripts').join('')))
});

gulp.task('clean', () => {
    return del(['build']);
});

gulp.task('watch', () => {
    return gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['clean','watch', 'sass:watch','sass','images','index']);