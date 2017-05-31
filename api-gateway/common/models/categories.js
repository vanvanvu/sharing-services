'use strict';

module.exports = function(categories) {
  categories.recommend = function (maxId, count, cb) {
    var reslut = {};
    cb(null, result);
  }
  categories.remoteMethod('recommend', {
    accepts: [
      {arg: 'maxId', type: 'string'},
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
