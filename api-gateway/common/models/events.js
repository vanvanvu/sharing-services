'use strict';

module.exports = function(Events) {
  // Define After-save methods
  Events.afterCreate = function(next) {
  //your logic goes here

  next();
  };
};
