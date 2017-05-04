var gulp = require('gulp');
var prompt = require('gulp-prompt');
var jsonModify = require('gulp-json-modify');
var insertLines = require('gulp-insert-lines');
var replace = require('gulp-replace');
var clean = require('gulp-clean');
var fs = require('fs');
var rootDest = '../..';
var normalizeTag = '\t<link rel="stylesheet" type="text/css" href="./__hive-4-apps/styles/normalize.css" />\n';
var normalize4AppsTag = '\t<link rel="stylesheet" type="text/css" href="./__hive-4-apps/styles/normalize-4-apps.css" />\n';
var stylesTag = '\t<!-- NG UI APPLICATION injection -->\n' + normalizeTag + normalize4AppsTag +'\t<!-- End NG UI APPLICATION injection -->\n';

gulp.task('install', function() { 
    return gulp.src('package.json')
        .pipe(prompt.prompt({
            type: 'input',
            name: 'path',
            message: 'Please what is the root path where index.html is located (ex: "/src/public/" or "/") ?'
        }, function(res){
            //value is in res.path (the title option gives the key) 
            gulp.src('./config/config.json', {base: './'})
                .pipe(jsonModify({ key: 'indexPath', value: res.path }))
                .pipe(gulp.dest('./'));
            
            indexPath = rootDest + res.path ;
            hiveDest = indexPath + "__hive-4-apps/";
            styleDest = hiveDest + "styles/";
            //scriptsDest = hiveDest + "functions/";

            //CSS
            gulp.src('./src/css/normalize.css')
                .pipe(gulp.dest(styleDest));
            gulp.src('./src/css/normalize-4-apps.css')
                .pipe(gulp.dest(styleDest));
            gulp.src('./src/css/webpack-4-apps.css')
                .pipe(gulp.dest(styleDest));
            gulp.src('./src/css/themify-icons.css')
                .pipe(gulp.dest(styleDest));
            gulp.src('./src/css/font-awesome.css')
                .pipe(gulp.dest(styleDest));

            //Fonts
            gulp.src('./src/css/fonts/Ubunthu.woff2')
                .pipe(gulp.dest(hiveDest + "fonts/"));
            
            //Themify
            gulp.src('./src/css/fonts/themify.eot')
                .pipe(gulp.dest(hiveDest + "scss/themify-icons/fonts/"));
            gulp.src('./src/css/fonts/themify.svg')
                .pipe(gulp.dest(hiveDest + "scss/themify-icons/fonts/"));
            gulp.src('./src/css/fonts/themify.ttf')
                .pipe(gulp.dest(hiveDest + "scss/themify-icons/fonts/"));
            gulp.src('./src/css/fonts/themify.woff')
                .pipe(gulp.dest(hiveDest + "scss/themify-icons/fonts/"));
            //Font awesome
            gulp.src('./src/css/fonts/fontAwesome.otf')
                .pipe(gulp.dest(hiveDest + "fonts/"));
            gulp.src('./src/css/fonts/fontawesome-webfont.eot')
                .pipe(gulp.dest(hiveDest + "fonts/"));
            gulp.src('./src/css/fonts/fontawesome-webfont.svg')
                .pipe(gulp.dest(hiveDest + "fonts/"));
            gulp.src('./src/css/fonts/fontawesome-webfont.ttf')
                .pipe(gulp.dest(hiveDest + "fonts/"));
            gulp.src('./src/css/fonts/fontawesome-webfont.woff')
                .pipe(gulp.dest(hiveDest + "fonts/"));
            gulp.src('./src/css/fonts/fontawesome-webfont.woff2')
                .pipe(gulp.dest(hiveDest + "fonts/"));
            
            // Inject CSS in index.html
            gulp.src(indexPath + 'index.html', {base: './'})
                .pipe(replace( stylesTag + "\n", ''))
                .pipe(insertLines({
                    'before': /<\/head>$/,
                    'lineBefore': stylesTag
                }))
                .pipe(gulp.dest('./'));
       }));
});

gulp.task('uninstall', function() {
    return gulp.src('package.json')
        .pipe(prompt.prompt({
            type: 'rawlist',
            name: 'bump',
            message: '__hive-4-apps directory contains Font awesome, Themify icons and normalize.css, what do you want to do ?',
            choices: ['remove all', 'keep __hive-4-apps directory']
        }, function(res){
            if(res.bump === 'remove all'){
                var configJson = JSON.parse(fs.readFileSync('./config/config.json'));
                indexPath = rootDest + configJson.indexPath ;
                // Remove CSS in index.html
                gulp.src(indexPath + 'index.html', {base: './'})
                    .pipe(replace(stylesTag + "\n", ''))
                    .pipe(gulp.dest('./'));
                //Remove __hive-4-apps
                gulp.src(indexPath + '__hive-4-apps')
                    .pipe(clean({force: true}));
            }
        }));
});