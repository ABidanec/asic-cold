'use strict';

/**
 * The task for delete directory 'build'
 * */

module.exports = function () {
    $.gulp.task('clean', function(){
        return $.del([
            'build/*.html',
            'build/assets/css',
            '!build/assets/fonts',
            '!build/assets/img',
            '!build/assets/pic',
            '!build/assets/js'
        ]);
    });
};