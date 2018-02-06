'use strict';

/**
 * The task for delete directory 'build'
 * */

module.exports = function () {
    $.gulp.task('clean', function(){
        return $.del([
            'build'
        ]);
    });
};