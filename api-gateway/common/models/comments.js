'use strict';
var config = require('../../server/config.json');
var app = require('../../server/server');
module.exports = function(Comments) {
    Comments.observe('before save', function updateTimestamp(ctx, next) {
        if (ctx.instance) {
            var newDate = new Date();
            ctx.instance.created_time = newDate;
            ctx.instance.updated_time = newDate;
        } else {
            ctx.data.updated_time = new Date();
        }
        next();
    });

    Comments.observe('before save', function storeCreator(ctx, next) {
      var Accounts = app.models.accounts;
        if (ctx.instance) {
            const token = ctx.options && ctx.options.accessToken;
            const userId = token && token.userId;
            ctx.instance.creator_id = userId;
            Accounts.findById(userId, {}, function(err, account){
                if(err) {
                    console.error(err);
                    next(err);
                    return;
                }
                ctx.instance.creator_name = account.username;
                ctx.instance.creator_avatar = account.avatar_url;
                next();
            });
        }
        else {
            next();
        }
    });
};
