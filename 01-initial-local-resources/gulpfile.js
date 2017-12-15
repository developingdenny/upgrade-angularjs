var gulp = require('gulp');

gulp.src('src/*')
    .pipe(gulp.dest('build/'));

gulp.src('assets/*')
    .pipe(gulp.dest('build/assets/'));  
    
gulp.src('node_modules/angular*/*.min.js')
    .pipe(gulp.dest('build/vendor/'));

gulp.src('node_modules/angularfire/dist/angularfire.min.js')
    .pipe(gulp.dest('build/vendor/angularfire/'));

gulp.src('vendor/**/*')
    .pipe(gulp.dest('build/vendor/'));    
    
gulp.task('default', function() {
  // place code for your default task here
  console.log("GULP!");
});