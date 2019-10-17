const gulp = require('gulp'),
	server = require('gulp-express'),
	babel = require('gulp-babel'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	copy = require('gulp-copy'),
	requirejs = require('gulp-requirejs'),
	del = require('del'),
	notify = require('gulp-notify'),
	Cache = require('gulp-file-cache'),
	nodemon = require('gulp-nodemon');

// jasmine test
const Jasmine = require('jasmine'),
	jasmine = new Jasmine(),
	jasmineConfig = require('./configs/jasmine/jasmine.json');
// jasmine reporter
const JasmineclReporter = require('jasmine-console-reporter'),
	jasmineReporterConfig = require('./configs/jasmine/jasmineReporter.json'),
	reporter = new JasmineclReporter(jasmineReporterConfig);

const cache = new Cache();
//------------------------------All paths on project
const path = require('./configs/path.json');
//------------------------------Messages for tasks
const message = require(path.messages);

// jshint = require('gulp-jshint')

// gulp.task('lint', function () {
// gulp.src('./**/*.js')
//     .pipe(jshint())
// })

gulp.task('server', function () {
	nodemon({
		script: './dest/temp/bot.js',
		ext: 'html js',
		ignore: ['ignored.js']
	}).on('restart', function () {
		console.log('restarted!');
	});
});

const rollup = require('rollup-stream'),
	sourcemaps = require('gulp-sourcemaps'),
	// babel = require('rollup-plugin-babel'),
	commonJs = require('rollup-plugin-commonjs'),
	resolveNodeModules = require('rollup-plugin-node-resolve');

const nameMainSrcfile = 'del.js',
	typeModules = 'cjs',
	sourceMap = true;

//------------------------------Selenium Server
gulp.task('selenium', () => {
	gulp.src('').pipe(notify({
		message: message.servers.selenium,
		onLast: true
	}));
	runCmd(commandServerSelenium);
});

//------------------------------Jasmine
gulp.task('test:jasmine', () => {
	gulp.src('').pipe(notify({
		message: message.tests.jasmine,
		onLast: true
	}));
	jasmine.loadConfig(jasmineConfig);
	jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;
	jasmine.env.clearReporters();
	jasmine.addReporter(reporter);
	jasmine.execute();
});
//------------------------------GUI tests
gulp.task('test:gui', () => {
	gulp.src('').pipe(notify({
		message: message.tests.gui,
		onLast: true
	}));
	runCmd(commandGuiTests);
});
//------------------------------GUI screenshots
gulp.task('screenshots', () => {
	gulp.src(path.tests.screenshots).pipe(notify({
		message: message.tests.screenshots,
		onLast: false
	}));
	runCmd(commandCreateScreenshots);
});

gulp.task('bundle-commonjs-clean', function () {
	return del(['es5/commonjs']);
});

gulp.task('bundle-amd-clean', function () {
	return del(['es5/amd']);
});
//
gulp.task('es6-commonjs', ['copy'], function () {
	return gulp
		.src('src/app/**/*.js')
		.pipe(
			babel({
				modules: 'common'
			})
		)
		.pipe(gulp.dest('dest/'));
});

gulp.task('commonjs-bundle', ['clean-temp', 'bundle-commonjs-clean', 'es6-commonjs'], function () {
	return browserify([''])
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename('app.js'))
		.pipe(gulp.dest('es5/commonjs'));
});

// gulp.task('es6-amd', ['clean-temp'], function () {
//     return gulp.src(['app/*.js', 'app/**/*.js'])
//         .pipe(babel({
//             modules: "amd"
//         }))
//         .pipe(gulp.dest('dest/temp'));
// });

// gulp.task('amd-bundle', ['bundle-amd-clean', 'es6-amd'], function (done) {
//     return requirejs({
//             name: "bootstrap",
//             baseUrl: 'dest/temp',
//             out: 'app.js'
//         })
//         .pipe(uglify())
//         .pipe(gulp.dest("es5/amd"));
// });

gulp.task('clean-temp', function () {
	del(['dest']);
});

// 'js bundle',

gulp.task('watch', function (done) {
	var stream = nodemon({
		script: 'dest/bot',
		watch: 'src',
		tasks: ['bundle-commonjs-clean', 'es6-commonjs'],
		done: done
	});

	return stream;
});

gulp.task('copy', () => {
	return gulp.src('src/data/**/**/**').pipe(gulp.dest('dest/data'));
});
// gulp.src('./src/data').pipe(gulp.dest('./dest/')));

gulp.task('amd', ['amd-bundle', 'server']);
gulp.task('commonjs', ['watch']);
gulp.task('build:commonjs', ['bundle-commonjs-clean', 'es6-commonjs']); // , 'copy'
// gulp.task('commonjs', [ 'commonjs-bundle', 'watch', 'server' ]);