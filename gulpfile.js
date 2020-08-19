const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compilar scss no css
function style() {
  // onde está o .scss?
  return gulp.src('./scss/**/*.scss')
    // passar o arquivo .scss pelo compilador
    .pipe(sass().on('error', sass.logError))
    // dizer onde eu quero salvar o arquivo compilado .css
    .pipe(gulp.dest('./css'))
    // sincronizar as mudanças no browser
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./scripts/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;