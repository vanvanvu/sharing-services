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
          status: "",
          biology: "",
          avatarUrl: "",
          isExpert: true,
          isFemale: false
        }
      };

      ret._type = source._type;
      ret._id = source._id;
      ret._data.username = source._source.username;
      ret._data.fullname = source._source.fullname;
      ret._data.status = source._source.status;
      ret._data.biology = source._source.biology;
      ret._data.avatarUrl = source._source.avatarUrl;
      ret._data.isExpert = source._source.isExpert;
      ret._data.isFemale = source._source.isFemale;

      return ret;
    }

    var resultEntryCategoryConvert = function (source) {
      var ret = {
        _type: "",
        _id: "",
        _data: {
          servicename: "String",
          brief: "String",
          thumbnailUrl: "String",
          expertId: "String"
        }
      };

      ret._type = source._type;
      ret._id = source._id;
      ret._data.servicename = source._source.servicename;
      ret._data.brief = source._source.brief;
      ret._data.thumbnailUrl = source._source.thumbnailUrl;
      ret._data.expertId = source._source.expertId;

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
      search('test', ['profiles', 'categories'], body)
      .then(results => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        if (results.hits.total > 0) console.log(`returned results:`);
        //cb(null, results.hits.hits);
        results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - (score: ${hit._score})`));

        var result = []
        for(var i = 0; i < results.hits.hits.length; i++) {
          var hit = results.hits.hits[i];
          if (hit._type == "profiles") {
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
      search('test', 'profiles', body)
      .then(results => {
        console.log(`found ${results.hits.total} items in ${results.took}ms`);
        if (results.hits.total > 0) console.log(`returned results:`);
        //cb(null, results.hits.hits);
        results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - user: ${hit._source.username} - fullname: ${hit._source.fullname} (score: ${hit._score})`));

        var result = []
        for(var i = 0; i < results.hits.hits.length; i++) {
          var hit = results.hits.hits[i];
          if (hit._type == "profiles") {
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
      search('test', 'categories', body)
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
