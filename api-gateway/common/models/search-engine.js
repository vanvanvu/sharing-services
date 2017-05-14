'use strict';

const elasticsearch = require('elasticsearch');

module.exports = function(Searchengine) {
  Searchengine.test = function(searchText, cb) {
    var esClient = new elasticsearch.Client({
      host: '127.0.0.1:9200',
      log: 'error'
    });

    var search = function search(index, body) {
      return esClient.search({index: index, body: body});
    };
    let body = {
      size: 20,
      from: 0,
      query: {
        multi_match: {
          query: searchText,
          type: 'phrase_prefix',
          fields : [ "title", "journal" ]
        }
      }
    };

    console.log(`retrieving all documents (displaying ${body.size} at a time)...`);
    search('library', body)
    .then(results => {
      console.log(`found ${results.hits.total} items in ${results.took}ms`);
      console.log(`returned article titles:`);
      cb(null, results.hits.hits);
      results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - ${hit._source.title}`));
    })
    .catch(reason => {
      console.error;
      cb(null, []);
    })
  };

  Searchengine.remoteMethod('test', {
        accepts: {arg: 'searchText', type: 'string'},
        returns: {arg: 'result', type: 'array'},
        http: {verb: 'get'}
  });

  Searchengine.general = function(searchText, cb) {
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
