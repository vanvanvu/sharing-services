'use strict';
var fs=require('fs');
var async = require('async');

module.exports = function(app) {
  var Accounts = app.models.accounts;
  var data = fs.readFileSync('fake_data/fakedata_userlist.json');
  var jsonObj = JSON.parse(data);
  var serviceList = fs.readFileSync('fake_data/fakedata_servicelist.json');
  var jsonObjServiceList = JSON.parse(serviceList);

  var addNewAccount = function (dataEntry, cb) {
    Accounts.findOrCreate({where: {email: dataEntry.email}}, dataEntry, function (err, account, isCreated){
      if (err) {
        console.error(err);
        cb(err);
        return;
      }
      var idx = Math.floor((Math.random() * (jsonObjServiceList.services.length - 1)) + 0);

      var updateInfor = {
        expert_title: jsonObjServiceList.services[idx].servicename,
        desc: jsonObjServiceList.services[idx].brief
      };
      account.updateAttributes(updateInfor, function(err, ret) {
        if (err) {
          console.error(err);
          cb(err);
          return;
        }
      cb();
      });
    });
  }

  var datas = [];
  for (var i = 0; i < jsonObj.users.length; i++) {
    var entry = {
      email: jsonObj.users[i] + "@test.com",
      username: jsonObj.users[i],
      fullname: jsonObj.users[i] + " full-name",
      password: "test"
    };
    datas.push(entry);
  }

  /*async.eachLimit(datas, 1, addNewAccount, function (err) {

  });*/
};

