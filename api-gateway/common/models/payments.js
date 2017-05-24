'use strict';

var braintree = require("braintree");
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: 'fv9fd7v7b6y74hph',
  publicKey: 'ts6z2zszc7gzkqvk',
  privateKey: 'efb87f127fd21c8adef9b5474b544c1b'
});

module.exports = function(payments) {
  payments.client_token = function(owner, cb) {
    gateway.clientToken.generate({}, function (err, response) {
      if (err) {
        console.log([err]);
        cb(null, err);
        return;
      }
      console.log(owner);
      cb(null, response.clientToken);
    });
  };

  payments.remoteMethod('client_token', {
        accepts: {arg: 'owner', type: 'string'},
        returns: {arg: 'clientToken', type: 'string'}
  });

  payments.transaction = function (nonceClient, cb) {
    var nonceFromTheClient = nonceClient;
    // Use payment method nonce here
    gateway.transaction.sale({
      amount: "10.00",
      paymentMethodNonce: nonceFromTheClient,
      options: {
        submitForSettlement: true
      }
    }, function (err, result) {
      if (err) {
        cb(null, err);
      }
      /*if (result.success) {
        result.transaction.id;
      }*/

      cb(null, result);
    });
  };

  payments.remoteMethod('transaction', {
        accepts: {arg: 'nonceClient', type: 'string', require: true},
        returns: [
          {arg: 'result', type: 'object'}
        ]
  });
};
