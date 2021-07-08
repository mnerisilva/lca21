var gulp = require('gulp');

var zip = require('gulp-zip');
var svn = require('gulp-asvn');
var clean = require('gulp-clean');
var sass = require('gulp-sass');


var sassConf = {
	sassFiles: './sass/*.scss',
	sassDestination: './css/default/'
};

var zipConf = {
	zipFiles: ['./**',
			   '!./preloader/node_modules/**',
			   '!./config.rb',
			   '!./gerador-css.bat',
			   '!./README',
			   '!./package.json',
			   '!./node_modules/**',
			   '!./preloader/src.js',
			   '!./preloader/README',
			   '!./preloader/package.json',
			   '!./auxiliar/**',
			   '!./sass/**'
			]
}

gulp.task('zip', function () {
    return gulp.src(zipConf.zipFiles)
        .pipe(zip('deploy.zip'))
        .pipe(gulp.dest('./'));
});