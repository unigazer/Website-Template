const gulp = require('gulp'),
    uglifyes = require('uglify-es'),
    composer = require('gulp-uglify/composer'),
    minifyCSS = require('gulp-csso'),
    html = require('gulp-minify-html'),
    concat = require('gulp-concat'),
    uglify = composer(uglifyes, console); 

// Move fonts
gulp.task('fonts', () => {
    return gulp.src('./src/fonts/*.woff2')
        .pipe(gulp.dest('./public/dist/fonts'));
});

// Concatenate JavaScript files and create "main.min.js"
gulp.task('scripts', () => {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/dist/js'));
});

// Concatenate stylesheetss and create "style.min.css"
gulp.task('stylesheet', () => {
    return gulp.src('src/css/*.css')
        .pipe(concat('style.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./public/dist/css'));
});

// Minify HTML files
gulp.task('html', () => {
    return gulp.src('./src/index.html')
        .pipe(html())
        .pipe(gulp.dest('./public/'));
});

gulp.task('default', gulp.series(['fonts', 'scripts', 'stylesheet', 'html']));