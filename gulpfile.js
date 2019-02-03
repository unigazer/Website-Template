const gulp = require('gulp');
const uglifyes = require('uglify-es');
const composer = require('gulp-uglify/composer');
const minifyCSS = require('gulp-csso');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const sourcemaps = require('gulp-sourcemaps');
const html = require('gulp-minify-html');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const uglify = composer(uglifyes, console);

// Move fonts
gulp.task('fonts', () => {
    return gulp.src('src/fonts/*.woff2')
        .pipe(gulp.dest('public/fonts'));
});

// Compress images
gulp.task('images', () => {
    return gulp.src('src/img/*')
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [{
                        removeViewBox: true
                    },
                    {
                        cleanupIDs: false
                    }
                ]
            })
        ], {
            verbose: true
        }))
        .pipe(gulp.dest('public/img'))
});

// Concatenate JavaScript files and create "main.min.js"
gulp.task('scripts', () => {
    return gulp.src('src/js/transformed.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

// Concatenate stylesheetss
gulp.task('stylesheet', () => {
    return gulp.src('src/**/*.css')
        //.pipe(sourcemaps.init())
        .pipe(postcss(
            [
                require('precss'),
                require('autoprefixer'),
                postcssPresetEnv({
                    stage: 3,
                    browsers: 'last 2 versions'
                })
            ]
        ))
        //.pipe(sourcemaps.write('.'))
        .pipe(concat('style.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('public/css'));
});

// Minify HTML files
gulp.task('html', () => {
    return gulp.src('src/index.html')
        .pipe(html())
        .pipe(gulp.dest('public/'));
});

// Service Worker
gulp.task('ServiceWorker', () => {
    return gulp.src('src/sw.js')
        .pipe(gulp.dest('public/'));
});

// Manifest
gulp.task('manifest', () => {
    return gulp.src('src/manifest.json')
        .pipe(gulp.dest('public/'));
});

gulp.task('default', gulp.series([
    'fonts',
    'images',
    'scripts',
    'stylesheet',
    'html',
    'ServiceWorker',
    'manifest'
]));