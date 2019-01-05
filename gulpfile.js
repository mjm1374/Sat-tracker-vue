var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify-es').default;
var sourcemaps =  require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sassdoc = require('sassdoc');
var browserify = require('gulp-browserify');
var vueify = require('gulp-vueify2');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest('public/css'))
        .pipe(sassdoc())
        // Release the pressure back and trigger flowing mode (drain)
        // See: http://sassdoc.com/gulp/#drain-event
        .resume();
});

gulp.task('js', function () {
    return gulp.src(['src/js/*.js','src/js/**/*.js'])
        .pipe(concat('bundles.js'))
        // .pipe(browserify({
        //     insertGlobals : true,
        //     //debug : !gulp.env.production
        //   }))
        .pipe(uglify())
        .pipe(gulp.dest('public/javascript'));
});

gulp.task('vendor', function () {
    return gulp.src(['src/vendor/*.js','src/vendor/**/*.js'])
        .pipe(concat('vendors.js'))
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
          }))
        .pipe(gulp.dest('public/javascript'));
});


gulp.task('vueify', function () {
  return gulp.src('src/components/**/*.vue')
    .pipe(vueify())
    .pipe(gulp.dest('public/javascript/vue'));
});

gulp.task('watch', function () {
    gulp.watch('src/scss/*.scss', ['sass']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/vendor/*.js',['vendor']);
    //gulp.watch('src/components/**/*.vue',['vueify']);
});

gulp.task('default', ['sass', 'js', 'watch']);