'use strict';
var config = require('../../server/config.json');
var path = require('path');
var app = require('../../server/server');

module.exports = function(accounts) {
  accounts.recommend = function (start, count, cb) {
    var result = {};
    var filter = {
      limit: count,
      skip: start
    };
    accounts.find(filter, function(err, list) {
      if(err) {
        console.error(err);
        cb(null, err);
        return;
      }
      result = list;
      cb(null, result);
    });
  };
  accounts.remoteMethod('recommend', {
    accepts: [
      {arg: 'start', type: 'string'},
      {arg: 'count', type: 'number'}
    ],
    returns: {arg: 'result', type: 'object'},
    http: {verb: 'get'}
  });

  accounts.listComments = function (accountId, start, count, cb) {
    var result = [];
    start = typeof start != "undefined" ? start : 0;
    count = typeof count != "undefined" ? count : 20;
    accounts.findById(accountId, {}, function (err, instance) {
      if (err) {
        console.error(err);
        cb(null, err);
        return;
      }

      instance.comments({limit: count, skip: start}, function (err, listComments) {
        if (err) {
          console.error(err);
          cb(null, err);
          return;
        }
        result = listComments;
        cb(null, result);
      })
    });
  };
  accounts.remoteMethod('listComments', {
    accepts: [
      {arg: 'accountId', type: 'string'},
      {arg: 'start', type: 'string'},
      {arg: 'count', type: 'number'}
    ],
    returns: {arg: 'result', type: 'object'},
    http: {verb: 'get'}
  });
  //send verification email after registration
/*  accounts.afterRemote('create', function(context, user, next) {
    console.log('> user.afterRemote triggered');

    var options = {
      type: 'email',
      to: user.email,
      from: 'noreply@loopback.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: user
    };

    user.verify(options, function(err, response) {
      if (err) {
        User.deleteById(user.id);
        return next(err);
      }

      console.log('> verification email sent:', response);

      context.res.render('response', {
        title: 'Signed up successfully',
        content: 'Please check your email and click on the verification link ' +
            'before logging in.',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });
  });*/

  //send password reset link when requested
/*  accounts.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' +
        info.accessToken.id + '">here</a> to reset your password';

    accounts.app.models.Email.send({
      to: info.email,
      from: info.email,
      subject: 'Password reset',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });*/
};
