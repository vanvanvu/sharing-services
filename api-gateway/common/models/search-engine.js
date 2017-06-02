'use strict';

const elasticsearch = require('elasticsearch');
var hostElastic = '127.0.0.1:9200';
module.exports = function(searchEngine) {

    var resultEntryExpertConvert = function (source) {
      var ret = {
        _type: "",
        _id: "",
        _data: {
          username: "",
          fullname: "",
          expert_title: "",
          status: "",
          biography: "",
          avatar_url: ""
        }
      };

      ret._type = source._type;
      ret._id = source._id;
      ret._data.username = source._source.username;
      ret._data.fullname = source._source.fullname;
      ret._data.expert_title = source._source.expert_title;
      ret._data.status = source._source.status;
      ret._data.biography = source._source.biography;
      ret._data.avatar_url = source._source.avatar_url;

      return ret;
    }

    var resultEntryCategoryConvert = function (source) {
      var ret = {
        _type: "",
        _id: "",
        _data: {
          category: "String",
          subcategory: "string",
          brief: "String",
          image_url: "String"
        }
      };

      ret._type = source._type;
      ret._id = source._id;
      ret._data.category = source._source.category;
      ret._data.brief = source._source.brief;
      ret._data.image_url = source._source.image_url;

      return ret;
    }
  ///////////////////////////////// General search
  searchEngine.general = function(searchText, maxId, count, cb) {
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
            fields: ['username', 'fullname', 'servicename']
          }
        }
      };

      console.log(`retrieving documents whose username or fullname or servicename match '${body.query.multi_match.query}' (displaying ${body.size} items at a time)...`);
      search('test1', ['accounts', 'categories'], body)
      .then(results => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        if (results.hits.total > 0) console.log(`returned results:`);
        //cb(null, results.hits.hits);
        results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - (score: ${hit._score})`));

        var result = []
        for(var i = 0; i < results.hits.hits.length; i++) {
          var hit = results.hits.hits[i];
          if (hit._type == "accounts") {
            result.push(resultEntryExpertConvert(hit));
          } else if (hit._type == "categories") {
            result.push(resultEntryCategoryConvert(hit));
          }
        }
        cb(null, result);
      })
    .catch(reason => {
      console.error;
      cb(null, []);
    })
  };

  searchEngine.remoteMethod('general', {
        accepts: [
          {arg: 'searchText', type: 'string'},
          {arg: 'maxId', type: 'string'},
          {arg: 'count', type: 'number'}
          ],
        returns: {arg: 'result', type: 'object'},
        http: {verb: 'get'}
  });

  ///////////////////////////////// Search Experts
  searchEngine.experts = function(searchText, maxId, count, cb) {
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
      search('test1', 'accounts', body)
      .then(results => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        if (results.hits.total > 0) console.log(`returned results:`);
        //cb(null, results.hits.hits);
        results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - user: ${hit._source.username} - fullname: ${hit._source.fullname} (score: ${hit._score})`));

        var result = []
        for(var i = 0; i < results.hits.hits.length; i++) {
          var hit = results.hits.hits[i];
          if (hit._type == "accounts") {
            result.push(resultEntryExpertConvert(hit));
          }
        }
        cb(null, result);
      })
    .catch(reason => {
      console.error;
      cb(null, []);
    })
  };

  searchEngine.remoteMethod('experts', {
        accepts: [
          {arg: 'searchText', type: 'string'},
          {arg: 'maxId', type: 'string'},
          {arg: 'count', type: 'number'}
          ],
        returns: {arg: 'result', type: 'object'},
        http: {verb: 'get'}
  });

  ///////////////////////////////// Search Categories
  searchEngine.categories = function(searchText, maxId, count, cb) {
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
      search('test1', 'categories', body)
      .then(results => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        if (results.hits.total > 0) console.log(`returned results:`);
        //cb(null, results.hits.hits);
        results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - service: ${hit._source.sevicename} (score: ${hit._score})`));
        var result = []
        for(var i = 0; i < results.hits.hits.length; i++) {
          var hit = results.hits.hits[i];
          if (hit._type == "categories") {
            result.push(resultEntryCategoryConvert(hit));
          }
        }
        cb(null, result);
      })
    .catch(reason => {
      console.error;
      cb(null, []);
    })
  };

  searchEngine.remoteMethod('categories', {
        accepts: [
          {arg: 'searchText', type: 'string'},
          {arg: 'maxId', type: 'string'},
          {arg: 'count', type: 'number'}
          ],
        returns: {arg: 'result', type: 'object'},
        http: {verb: 'get'}
  });
};
