'use strict';

/**
 * This task is for synchronizing code changes
 * with the browser
 * plugins gulp - browser-sync
 * */

module.exports = function(){
    return $.gulp.task('serve', function(){
        $.browserSync.init({
            open: true,
            server: './build'
        });
        $.browserSync.watch('build', $.browserSync.reload);
    });
};