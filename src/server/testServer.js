var params = require("./params");
var HttpServer = require("./HttpServer");

module.exports = new HttpServer(params.WEB_APP_TEST_PORT, params.WEB_APP_TEST_PATH);