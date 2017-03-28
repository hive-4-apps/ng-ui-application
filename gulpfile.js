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
            //scriptsDest = rootDest + "functions/";

            //CSS
            gulp.src('./src/css/normalize.css')
                .pipe(gulp.dest(styleDest));
            gulp.src('./src/css/normalize-4-apps.css')
                .pipe(gulp.dest(styleDest));
            gulp.src('./src/css/webpack-4-apps.css')
                .pipe(gulp.dest(styleDest));
            gulp.src('./src/css/themify-icons.css')
                .pipe(gulp.dest(styleDest));
   
            //Fonts
            gulp.src('./src/css/fonts/themify.eot')
                .pipe(gulp.dest(rootDest + "scss/themify-icons/fonts/"));
            gulp.src('./src/css/fonts/themify.svg')
                .pipe(gulp.dest(rootDest + "scss/themify-icons/fonts/"));
            gulp.src('./src/css/fonts/themify.ttf')
                .pipe(gulp.dest(rootDest + "scss/themify-icons/fonts/"));
            gulp.src('./src/css/fonts/themify.woff')
                .pipe(gulp.dest(rootDest + "scss/themify-icons/fonts/"));
            
            //Scripts

        }));
});