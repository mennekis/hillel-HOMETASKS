const gulp = require('gulp');
const { src, dest, watch, series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sync = require('browser-sync').create();

function minCss(cb) {
    src(["node_modules/lightslider/dist/css/lightslider.css", "node_modules/bootstrap/dist/css/bootstrap.min.css",
        ])
        .pipe(concat("style.min.css"))
        .pipe(cleanCSS())
      .pipe(dest("css"))
      .pipe(sync.stream());
    cb();
  }
 
   
  function minJS(cb) {
    src([
      "node_modules/jquery/dist/jquery.js",
      "node_modules/lightslider/dist/js/lightslider.js",
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "app.js",
    ])
      .pipe(concat("all.min.js"))
      .pipe(uglify())
      .pipe(dest("js"));
    cb();
  }

function browserSync(cb) {
    sync.init({
        server: {
            baseDir: "./"
        }
    });

    watch('**.html').on('change', sync.reload);
}

exports.css = minCss;
exports.js = minJS;
exports.allTasks = series( minCss, minJS);

