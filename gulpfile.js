'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function () {
  browserSync.init({
  server: 'dist',
    open: 'local',//will open browser tab automatically
    // open: false,
    notify:false
  });
})

gulp.task('default', gulp.series('serve'))