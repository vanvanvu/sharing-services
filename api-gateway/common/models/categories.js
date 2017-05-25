'use strict';

module.exports = function(categories) {
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
