const { src, dest, watch, series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const tailwindcss = require('tailwindcss');


// Sass Task
function scssTask() {
  return src('./sass/*.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([tailwindcss, cssnano()]))
    .pipe(dest('dist', { sourcemaps: '.' }));
}


function jsTask(){
  return src('./main.js', { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.',

    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
    watch('./*.html', browsersyncReload);
    watch(['./main.js','./dist/tailwind.css','./sass/*.scss'], series(scssTask, jsTask, browsersyncReload));
  }

// Default Gulp task
exports.default = series(
  scssTask,
  jsTask,
  browsersyncServe,
  watchTask
);