"use strict";

var continuousBuilder = require("./continuousBuilder");
var params = require("./params");
var server = require("./testServer");

continuousBuilder.start(params.SRC_TEST_APP_PATH, params.WEB_APP_TEST_PATH);
server.start();
