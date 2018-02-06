'use strict';

/**
 * gulp-plugins to install local
 * gulp-csso gulp-load-plugins gulp-sass gulp-sourcemaps
 * gulp-notify gulp-autoprefixer gulp-pug del browser-sync
*/
global.$ = {
        gulp: require('gulp'),
        del: require('del'),
        browserSync: require('browser-sync').create(),
        gp: require('gulp-load-plugins')(),
        path: {
            task: require('./gulp/paths/tasks.js')
        }

    }


/*
* реквайрим модули
* в цикле перебора массива из файла tasks.js
* */

$.path.task.forEach(function(taskPath){
    require(taskPath)();
});

/*
* пишем дефолтный таск из чередованием вызова тасков
* */

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug'
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )
));

