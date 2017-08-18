var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')
var postcss = require('gulp-postcss')
var sourcemaps = require('gulp-sourcemaps')
var autoprefixer = require('autoprefixer')

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src(['src/scss/main.scss', 'src/scss/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream())
})

// Move the javascript files into our /src/js folder
gulp.task('js', function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream())
})

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: ('./src'),
    notify: false
  })

  gulp.watch(['src/scss/main.scss', 'src/scss/*.scss'], ['sass'])
  gulp.watch('src/**/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['js', 'serve'])
