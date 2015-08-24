var params = require("./params");
var HttpServer = require("./HttpServer");

module.exports = new HttpServer(8080, params.WEB_APP_PATH);