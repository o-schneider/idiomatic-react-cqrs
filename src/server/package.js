"use strict";

var build = require("./build");
var params = require("./params");

var browserify = build.init(params.SRC_JS_PATH, params.WEB_APP_PATH, function (err) {
  console.error("Build failed : ", err.message);
}, function () {
  console.log("Build finished successfully");
});

browserify.build();