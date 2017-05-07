'use strict';

module.exports = function(Searchengine) {
  Searchengine.UserExpert = function(key, cb) {
      console.log(key);
      var result = "testmessage"
      cb(null, result);
  };

  Searchengine.remoteMethod('UserExpert', {
        accepts: {arg: 'key', type: 'string'},
        returns: {arg: 'result', type: 'string'}
  });
};
