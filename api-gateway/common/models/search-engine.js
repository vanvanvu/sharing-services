'use strict';

module.exports = function(Searchengine) {
  Searchengine.general = function(searchText) {
      var result = {testField : "testmessage"};
      cb(null, result);
  };

  Searchengine.remoteMethod('general', {
        accepts: {arg: 'searchText', type: 'string'},
        returns: {arg: 'result', type: 'object'},
        http: {verb: 'get'}
  });

  Searchengine.experts = function(searchText, maxId, count, cb) {
      var result = {testField : "testmessage"};
      cb(null, result);
  };

  Searchengine.remoteMethod('experts', {
        accepts: [
          {arg: 'searchText', type: 'string'},
          {arg: 'maxId', type: 'string'},
          {arg: 'count', type: 'number'}
          ],
        returns: {arg: 'result', type: 'object'},
        http: {verb: 'get'}
  });

  Searchengine.categories = function(searchText, maxId, count, cb) {
      var result = {testField : "testmessage"};
      cb(null, result);
  };

  Searchengine.remoteMethod('categories', {
        accepts: [
          {arg: 'searchText', type: 'string'},
          {arg: 'maxId', type: 'string'},
          {arg: 'count', type: 'number'}
          ],
        returns: {arg: 'result', type: 'object'},
        http: {verb: 'get'}
  });
};
