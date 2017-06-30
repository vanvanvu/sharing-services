'use strict';

var QB = require('quickblox');

var CONFIG = {
  endpoints: {
    api: "apicustomdomain.quickblox.com", // set custom API endpoint
    chat: "chatcustomdomain.quickblox.com" // set custom Chat endpoint
  },
  chatProtocol: {
    active: 2 // set 1 to use BOSH, set 2 to use WebSockets (default)
  },
  debug: {mode: 1} // set DEBUG mode
};

var CREDENTIALS = {
  appId: 28287,
  authKey: 'XydaWcf8OO9xhGT',
  authSecret: 'JZfqTspCvELAmnW'
};
QB.init(CREDENTIALS.appId, CREDENTIALS.authKey, CREDENTIALS.authSecret, CONFIG);

module.exports = {
    QB: QB
}