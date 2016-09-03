var path       = require("path"),
    gulp       = require("gulp"),
    less       = require("gulp-less"),
    sourcemaps = require("gulp-sourcemaps"),
    typescript = require("gulp-typescript");

var typescriptSettings = require("./tsconfig.json");

var DEST = {
  HTML: "dist/",
  CSS: "dist/assets/css/",
  JS: "dist/assets/js/",
  IMAGES: "dist/assets/images/"
};

var SRC = {
  SYSTEMJS: "systemjs.config.js",
  LESS: {
    MAIN: "src/less/main.less",
    WATCH: "src/less/**/*.less"
  },
  TYPESCRIPT: "src/ts/**/*.ts",
  TEMPLATES: "src/**/*.html",
  IMAGES: "src/images/**/*"
};


function copyTask(src, dest) {
  var task = function () {
    return gulp.src(src).pipe(gulp.dest(dest))
  };

  return task;
}

// copying tasks, no logic involved here
gulp.task("systemjs", copyTask(SRC.SYSTEMJS, DEST.JS));
gulp.task("html", copyTask(SRC.TEMPLATES, DEST.HTML));
gulp.task("images", copyTask(SRC.IMAGES, DEST.IMAGES));


// task for compiling css
gulp.task("less", function () {
  return gulp.src(SRC.LESS.MAIN)
              .pipe(sourcemaps.init())
              .pipe(less({
                compress: true
              }))
              .pipe(sourcemaps.write())
              .pipe(gulp.dest(DEST.CSS));
});


// task for compiling the typescript app
gulp.task("typescript", function () {
  var files = ["typings/index.d.ts", SRC.TYPESCRIPT];

  return gulp.src(files)
              .pipe(typescript(typescriptSettings.compilerOptions))
              .pipe(gulp.dest(DEST.JS));
});


gulp.task("watch", function () {
  gulp.watch([SRC.TEMPLATES], ["html"]);
  gulp.watch([SRC.LESS.WATCH], ["less"]);
  gulp.watch([SRC.TYPESCRIPT], ["typescript"]);
  gulp.watch([SRC.IMAGES], ["images"]);
});


gulp.task("default", ["images", "html", "less", "typescript", "systemjs"]);
