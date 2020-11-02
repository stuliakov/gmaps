const gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoPrefixer = require('gulp-autoprefixer'),
	del = require('del'),
	purgecss = require('gulp-purgecss'),
	browserSync = require('browser-sync').create();

gulp.task('moveMainCss', function() {
	return (gulp
			.src('./src/scss/def.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(concat('def.css'))
			.pipe(purgecss({ content: [ './index.html' ] }))
			// .pipe(autoPrefixer([ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ], { cascade: true }))
			// .pipe(minifyCSS())
			.pipe(gulp.dest('/dist/css')) );
});

gulp.task('moveMdCss', function() {
	return (gulp
			.src('./src/scss/md.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(concat('md.css'))
			.pipe(purgecss({ content: [ './index.html' ] }))
			.pipe(autoPrefixer([ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ], { cascade: true }))
			// .pipe(minifyCSS())
			.pipe(gulp.dest('./dist/css')) );
});

gulp.task('moveLgCss', function() {
	return (gulp
			.src('./src/scss/lg.scss')
			.pipe(sass().on('error', sass.logError))
			.pipe(concat('lg.css'))
			.pipe(purgecss({ content: [ './index.html' ] }))
			.pipe(autoPrefixer([ 'last 15 versions', '> 1%', 'ie 8', 'ie 7' ], { cascade: true }))
			// .pipe(minifyCSS())
			.pipe(gulp.dest('./dist/css')) );
});

gulp.task('watchCSS', function() {
	return gulp.watch('./src/scss/*.scss', gulp.series('sass'));
});

gulp.task('moveCSS', gulp.series('moveMainCss', 'moveMdCss', 'moveLgCss'));

gulp.task('clean-dist', function(done) {
	del.sync('dist');
	done();
});

gulp.task('build', gulp.series('clean-dist', 'moveCSS'));

gulp.task('sass', function(done) {
	gulp.src('./src/scss/*.scss').pipe(sass()).pipe(gulp.dest('dist/css')).pipe(browserSync.stream());

	done();
});
