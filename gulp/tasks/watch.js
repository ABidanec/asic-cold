'use strict';

/**
 * This task for monitoring the source code files
 * plugin watch
 * */

module.exports = function(){
    $.gulp.task('watch', function(){
        $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
        $.gulp.watch('./source/pug/**/*.pug', $.gulp.series('pug'));
    });
};