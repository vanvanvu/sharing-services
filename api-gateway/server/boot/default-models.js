/**
 * Created by vanva on 4/16/2017.
 */
'use strict';
var async = require('async');

module.exports = function(server) {
  //data sources
  var mongoDbs = app.dataSources.mongoDbs;
  //create all models
  async.parallel({
    reviewers: async.apply(createUsers),
  }, function(err, results) {
    if (err) throw err;
  });

  // Define functions
  function createUsers(cb) {
    mongoDs.automigrate('Users', function(err) {
      if (err) return cb(err);
      var Users = app.models.Users;
      Users.create([{
        username: 'vanvanvu'
      }], cb);
    });
  }
};
