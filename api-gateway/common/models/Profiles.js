'use strict';

module.exports = function(profiles) {
    profiles.edit = function (username, data, cb) {
        LoginUser.findOne({"where": {"username": username}}, function (err, user) {
            if (err) {
                cb(null, err);
                return;
            }
            if (!user.isPrivate) {
                let instagramCrawler = require('../../api_gateway/server/utility/instagramCrawler');
                instagramCrawler.scraperInforLoginUser(user);
            }
            cb(null, user);
        });

    };

    LoginUser.remoteMethod(
        'scraper',
        {
            accepts: [{arg: 'username', type: 'string'}],
            http: {verb: 'put'},
            returns: [{arg: 'body', type: 'object', root: true}]
        }
    );
/*  profiles.observe('before save', function filterProperties(ctx, next) {
    if (ctx.instance && ctx.isNewInstance) {
      var data = ctx.instance;
      var filter = {username: data.username};
      profiles.findOne(filter, function (err, profile) {
        if (err) {
          console.log(err);
          return;
        }
        if (profile != null) {
          var updateData = {
            fullname: ,
            isFemale: false,
            isExpert: false,
            biology: "",
            status: "off_line"
          };
          profile.updateAttributes(profile, function (err, ret) {
            if (err) {
              console.log(err);
            }
            console.log(ret);
          });
          return;
        }
      });
    }
    next();
  });*/
};
