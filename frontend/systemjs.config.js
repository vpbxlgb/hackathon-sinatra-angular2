(function(global) {
  var map = {
    "app": "assets/js",
    "rxjs": "node_modules/rxjs",
    "@angular": "node_modules/@angular"
  };

  var packages = {
    "app": {
      main: "app.js",
      defaultExtension: "js"
    },
    "rxjs": {
      defaultExtension: "js"
    }
  };

  var packageNames = [
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    "@angular/http",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "@angular/router"
  ];

  packageNames.forEach(function(name) {
    packages[name] = {
      main: "index.js",
      defaultExtension: "js"
    };
  });

  var config = {
    map: map,
    packages: packages
  }

  if (global.filterSystemConfig) {
    global.filterSystemConfig(config);
  }

  System.config(config);
})(this);
