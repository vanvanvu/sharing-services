'use strict';

const elasticsearch = require('elasticsearch');
var hostElastic = '127.0.0.1:9201';
module.exports = function(Searchengine) {
  Searchengine.test = function(searchText, cb) {
    var esClient = new elasticsearch.Client({
      host: hostElastic,
      log: 'error'
    });

    var search = function search(index, body) {
      return esClient.search({index: index, body: body});
    };
    var body = {
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

  ///////////////////////////////// General search
  Searchengine.general = function(searchText, cb) {
      const elasticsearch = require('elasticsearch');
      const esClient = new elasticsearch.Client({
        host: hostElastic,
        log: 'error'
      });
      const search = function search(index, type, body) {
        return esClient.search({index: index, type: type, body: body});
      };
      var body = {
        size: 100,
        from: 0,
        query: {
          multi_match: {
            query: searchText,
            type: "phrase_prefix",
            fields: ['username', 'fullname', 'servicename']
          }
        }
      };

      console.log(`retrieving documents whose username or fullname or servicename match '${body.query.multi_match.query}' (displaying ${body.size} items at a time)...`);
      search('test', ['Profiles', 'Categories'], body)
      .then(results => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        if (results.hits.total > 0) console.log(`returned results:`);
        cb(null, results.hits.hits);
        results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - (score: ${hit._score})`));
      })
    .catch(reason => {
      console.error;
      cb(null, []);
    })
  };

  Searchengine.remoteMethod('general', {
        accepts: {arg: 'searchText', type: 'string'},
        returns: {arg: 'result', type: 'object'},
        http: {verb: 'get'}
  });

  ///////////////////////////////// Search Experts
  Searchengine.experts = function(searchText, maxId, count, cb) {
      const elasticsearch = require('elasticsearch');
      const esClient = new elasticsearch.Client({
        host: hostElastic,
        log: 'error'
      });

      const search = function search(index, type, body) {
        return esClient.search({index: index, type: type, body: body});
      };

      var body = {
        size: count,
        from: maxId,
        query: {
          multi_match: {
            query: searchText,
            type: "phrase_prefix",
            fields: ['username', 'fullname']
          }
        },
        filter: {
          term: {isExpert: true}
        }
      };

      //console.log(`retrieving documents whose username or fullname or servicename match '${body.query.bool.must[0].match_phrase}' (displaying ${body.size} items at a time)...`);
      search('test', 'Profiles', body)
      .then(results => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        if (results.hits.total > 0) console.log(`returned results:`);
        cb(null, results.hits.hits);
        results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - user: ${hit._source.username} - fullname: ${hit._source.fullname} (score: ${hit._score})`));
      })
    .catch(reason => {
      console.error;
      cb(null, []);
    })
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

  ///////////////////////////////// Search Categories
  Searchengine.categories = function(searchText, maxId, count, cb) {
      const elasticsearch = require('elasticsearch');
      const esClient = new elasticsearch.Client({
        host: hostElastic,
        log: 'error'
      });

      const search = function search(index, type, body) {
        return esClient.search({index: index, type: type, body: body});
      };

      let body = {
        size: count,
        from: maxId,
        query: {
          multi_match: {
            query: searchText,
            type: "phrase_prefix",
            fields: ['servicename']
          }
        }
      };

      console.log(`retrieving documents whose username or fullname or servicename match '${body.query.multi_match.query}' (displaying ${body.size} items at a time)...`);
      search('test', 'Categories', body)
      .then(results => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        if (results.hits.total > 0) console.log(`returned results:`);
        cb(null, results.hits.hits);
        results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - service: ${hit._source.sevicename} (score: ${hit._score})`));
      })
    .catch(reason => {
      console.error;
      cb(null, []);
    })
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
