var gulp = require('gulp'),
  streamqueue = require('streamqueue'),
  minifyHtml = require('gulp-minify-html'),
  templateCache = require('gulp-angular-templatecache'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');

gulp.task('mui', function() {
  var stream = streamqueue({objectMode: true});
  stream.queue(
    gulp.src('./src/directives/decorators/mui/*.html')
    .pipe(minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe(templateCache({
      module: 'schemaForm',
      root: 'directives/decorators/mui/'
    }))
    );
  stream.queue(gulp.src('./src/directives/decorators/mui/*.js'));

  stream.done()
  .pipe(concat('mui-decorator.js'))
  .pipe(gulp.dest('./dist/'))
  .pipe(uglify())
  .pipe(rename('mui-decorator.min.js'))
  .pipe(gulp.dest('./dist/'));

});
