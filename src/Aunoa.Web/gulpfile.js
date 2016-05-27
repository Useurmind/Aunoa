var gulp = require("gulp");
var clean = require("gulp-clean");

var destPath = "./wwwroot/libs/";

// Delete the dist directory
gulp.task("clean", function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", function () {
    gulp.src([
            "es6-shim/es6-shim.min.js",
            "zone.js/dist/zone.js",
            "guid/guid.js",
            "reflect-metadata/Reflect.js",
            "systemjs/dist/system.src.js",
            "rxjs/**",
            "zone.js/dist/**",
            "@angular/**",
            "jquery/dist/jquery.*js",
            "bootstrap/dist/js/bootstrap.*js"
    ], {
        cwd: "node_modules/**"
    }).pipe(gulp.dest("./wwwroot/libs"));

    gulp.src([
        "node_modules/bootstrap/dist/css/bootstrap.css"
    ]).pipe(gulp.dest("./wwwroot/libs/css"));

    //gulp.src([
    //        "node_modules/typescript-dotnet/source/**"
    //    ])
    //    .pipe(gulp.dest("./AppTS/External"));

    //gulp.src([
    //        "AppTS/**/*.js"
    //    ])
    //    .pipe(gulp.dest("./wwwroot/app"));
});

gulp.task("default", ["scriptsNStyles"]);