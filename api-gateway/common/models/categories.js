'use strict';

module.exports = function(categories) {
  categories.recommend = function (start, count, cb) {
    var result = {};
    var filter = {
      limit: count,
      skip: start
    };
    categories.find(filter, function(err, list) {
      if(err) {
        console.error(err);
        cb(null, err);
        return;
      }
      result = list;
      cb(null, result);
    });
  };
  categories.remoteMethod('recommend', {
    accepts: [
      {arg: 'start', type: 'string'},
      {arg: 'count', type: 'number'}
    ],
    returns: {arg: 'result', type: 'object'},
    http: {verb: 'get'}
  });
    /*
    categories.observe('after save', function filterProperties(ctx, next) {
        if (ctx.instance && ctx.isNewInstance) {
            var service = ctx.instance;
            var account = service.accounts();
            account.updateAttribute("serviceCount", account.serviceCount + 1, function(err, ret) {
                if (err) {
                    console.error(err);
                    next(err);
                    return;
                }
                next();
            });
        }
    });
    */
};
