'use strict';

module.exports = function(Starting) {
  Starting.tutor = function (index, cb) {
    var result = {};
    var filter = {
      limit: 1,
      skip: index
    };
    Starting.find(filter, function(err, list) {
      if(err) {
        console.error(err);
        cb(null, err);
        return;
      }
      result = list[0];
      cb(null, result);
    });
  };
  Starting.remoteMethod('tutor', {
    accepts: [
      {arg: 'index', type: 'number'}
    ],
    returns: {arg: 'result', type: 'object'},
    http: {verb: 'get'}
  });
};
