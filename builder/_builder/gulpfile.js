/*
npm install --save-dev gulp gulp-rename gulp-replace gulp-imports gulp-strip-comments gulp-remove-empty-lines gulp-remove-lines gulp-postcss autoprefixer
*/

var gulpsrc = "../home/localhost/www/components/_config.js";
var cssdest = "../home/localhost/www/_mod_files/_css/";
var jsdest = "../home/localhost/www/_js/";

var gulp             = require("gulp");
var stripComments    = require('gulp-strip-comments');
var replace          = require("gulp-replace");
var gulpImports      = require('gulp-imports');
var removeLines      = require('gulp-remove-lines');
var removeEmptyLines = require('gulp-remove-empty-lines');
var rename           = require("gulp-rename");
var postcss          = require('gulp-postcss');
var autoprefixer     = require('autoprefixer');


gulp.task("file_headcss", function() {
    gulp.src(gulpsrc)
      .pipe(removeLines({'filters': [/_lazy_/]}))
      .pipe(removeLines({'filters': [/_lazyhead_/]}))
      .pipe(removeLines({'filters': [/_js_/]}))
      .pipe(removeLines({'filters': [/_js_/]}))
      .pipe(removeLines({'filters': [/_js_/]}))
      .pipe(removeLines({'filters': [/_jshead_/]}))
      .pipe(removeLines({'filters': [/_jshead_/]}))
      .pipe(removeLines({'filters': [/_jshead_/]}))
      .pipe(stripComments())
      .pipe(replace("_css_", "//import"))
      //.pipe(replace(");", ")"))
      .pipe(removeEmptyLines())
      .pipe(gulpImports())
      .pipe(replace("../../_mod_files/ce_images/", "_mod_files/ce_images/"))
      .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
      .pipe(rename("ami_custom.css"))
      .pipe(gulp.dest(cssdest));
});

gulp.task("file_bodyjs", function() {
    gulp.src(gulpsrc)
      .pipe(removeLines({'filters': [/_lazyhead_/]}))
      .pipe(removeLines({'filters': [/_css_/]}))
      .pipe(removeLines({'filters': [/_css_/]}))
      .pipe(removeLines({'filters': [/_css_/]}))
      .pipe(removeLines({'filters': [/_jshead_/]}))
      .pipe(removeLines({'filters': [/_jshead_/]}))
      .pipe(removeLines({'filters': [/_jshead_/]}))
      .pipe(stripComments())
      .pipe(replace("_lazy_", "head.load"))
      .pipe(replace("_js_", "//import"))
      .pipe(replace("),", ")"))
      .pipe(removeEmptyLines())
      .pipe(gulpImports())
      .pipe(rename("_body.js"))
      .pipe(gulp.dest(jsdest));
});

gulp.task("file_headjs", function() {
    gulp.src(gulpsrc)
      .pipe(removeLines({'filters': [/_lazy_/]}))
      .pipe(removeLines({'filters': [/_css_/]}))
      .pipe(removeLines({'filters': [/_css_/]}))
      .pipe(removeLines({'filters': [/_css_/]}))
      .pipe(removeLines({'filters': [/_js_/]}))
      .pipe(removeLines({'filters': [/_js_/]}))
      .pipe(removeLines({'filters': [/_js_/]}))
      .pipe(replace('//autouncomment//', ""))
      .pipe(stripComments())
      .pipe(replace("_lazyhead_", "head.load"))
      .pipe(replace("_jshead_", "//import"))
      .pipe(replace("),", ")"))
      .pipe(removeEmptyLines())
      .pipe(gulpImports())
      .pipe(rename("_head.js"))
      .pipe(gulp.dest(jsdest));
});
gulp.task("default", ["file_headcss","file_bodyjs", "file_headjs", ]);