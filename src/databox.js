var Databox = require("databox");
var Util    = require("util");

exports.load = function(payload) {
  var client = new Databox({
    push_token: process.env.DATABOX_TOKEN
  });
  var insertAllAsync = Util.promisify(client.insertAll).bind(client);

  return insertAllAsync(payload);
}
