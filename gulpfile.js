var gulp = require('gulp');
var prompt = require('gulp-prompt-async');

var rootDest = '../..';

gulp.task('default', function() {
    return gulp.src('package.json')
        .pipe(prompt.prompt({
            type: 'input',
            name: 'path',
            message: 'Please what is the root path where index.html is located (ex: "/src/public/" or "/") ?'
        }, function(res){
            //value is in res.path (the title option gives the key) 
            rootDest = rootDest + res.path + "__hive-4-apps/";
            styleDest = rootDest + "styles/"; 
            scriptsDest = rootDest + "scripts/"; 
            
            //CSS
            gulp.src('./src/normalize.css')
                .pipe(gulp.dest(styleDest));
            gulp.src('./src/normalize-4-apps.css')
                .pipe(gulp.dest(styleDest));
            gulp.src('./src/hack-4-apps.css')
                .pipe(gulp.dest(styleDest));
                      
            //Scripts
           
        }));
});