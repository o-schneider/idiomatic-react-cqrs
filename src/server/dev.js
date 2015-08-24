"use strict";

var continuousBuilder = require("./continuousBuilder");
var params = require("./params");
var server = require("./heroesDeskServer");

continuousBuilder.start(params.SRC_JS_PATH, params.WEB_APP_PATH);
server.start();
