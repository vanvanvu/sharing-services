/**
 * Created by vanva on 4/28/2017.
 */
var braintree = require("braintree");
var fs = require('fs');
var path = require('path');

module.exports = function(app) {
  var contents = fs.readFileSync("./braintree-account-sandbox.json");
  // Define to JSON type
  var jsonContent = JSON.parse(contents);
  var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: jsonContent.merchant_id,
    publicKey: jsonContent.public_key,
    privateKey: jsonContent.private_key
  });
};
