'use strict';
var fs=require('fs');
var async = require('async');

module.exports = function(app) {
/*  var Accounts = app.models.Accounts;
  var Profiles = app.models.profiles;

  var data = fs.readFileSync('fake_data/fakedata_userlist.json');
  var jsonObj = JSON.parse(data);

  var addNewAccount = function (dataEntry, cb) {
    Accounts.findOrCreate({where: {email: dataEntry.email}}, dataEntry)
      .then (function (data) {
        var account = data[0];
        return account.profiles();
      })
      .then (function (data1) {
        var profile = data1;
        return profile.updateAttribute("isExpert", true);
      })
      .then (function (data2) {
        var ret = data2;
        var item = {
          serviceCount: 0
        };
        return ret.Expert.create(item);
      })
      .then (function (data5) {
        var expert = data5;
        return expert.updateAttribute("serviceCount", expert.serviceCount + 1);
      })
      .then (function (data3) {
        var expert = data3;
        var ser = {
          servicename: ("service-" + dataEntry.username)
        };
        return expert.Service.create(ser);
      })
      .then (function (data6) {
        cb();
      })
      .catch(function (err) {
        cb(err);
      });
  }

  var datas = [];
  for (var i = 0; i < jsonObj.users.length; i++) {
    var entry = {
      email: jsonObj.users[i] + "@test.com",
      username: jsonObj.users[i],
      password: "test"
    };
    datas.push(entry);
  }

  async.eachLimit(datas, 1, addNewAccount, function (err) {

  });*/
};

