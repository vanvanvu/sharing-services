'use strict';
var app = require('../../server/server');
module.exports = function(Comments) {
    const Accounts = app.models.accounts;
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
        if (ctx.instance) {
            const token = ctx.options && ctx.options.accessToken;
            const userId = token && token.userId;
            ctx.instance.creator_id = userId;
            Accounts.findById(userId, null, function(err, account){
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
