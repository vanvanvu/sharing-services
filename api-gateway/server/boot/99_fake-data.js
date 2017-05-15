
var fs=require('fs');

module.exports = function(app) {
  var data = fs.readFileSync('fake_data/fakedata_userlist.json');
  var jsonObj = JSON.parse(data);


};

