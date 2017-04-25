'use strict';

module.exports = function(Events) {
  // Define After-save methods
  Events.observe('before save', function(ctx, next) {
    if (ctx.instance) {
      var event = ctx.instance;

      // Have to check with token

    }
    next();
  });
};
