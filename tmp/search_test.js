(function () {
  'use strict';
  //console.log(process.argv);
  var document = process.argv[2];
  var searchText = process.argv[3];
  var fs = require('fs');
  const elasticsearch = require('elasticsearch');
  const esClient = new elasticsearch.Client({
    host: '172.33.47.10:28002',
    log: 'error'
  });

  const search = function search(index, type, body) {
    return esClient.search({index: index, type: type, body: body});
  };

  // only for testing purposes
  // all calls should be initiated through the module
  const test = function test() {
    let body = {
      size: 100,
      from: 0,
      query: {
        multi_match: {
          query: searchText,
	  type: "phrase_prefix",
          fields: ['username', 'fullname']
        }
      }
    };

    console.log(`retrieving documents whose username or fullname match '${body.query.multi_match.query}' (displaying ${body.size} items at a time)...`);
    search('follou_debug_1', document, body)
    .then(results => {
      console.log(`found ${results.hits.total} items in ${results.took}ms`);
      if (results.hits.total > 0) console.log(`returned results:`);
      results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - user: ${hit._source.username} - fullname: ${hit._source.fullname} (score: ${hit._score})`));
      var json = JSON.stringify(results);
      fs.writeFile('search_result.json', json);
      //console.log(results.hits.hits);
    })
    .catch(console.error);
  };

  test();

  module.exports = {
    search
  };
} ());
