'use strict';
var config = require('../../server/config.json');
var path = require('path');
var app = require('../../server/server');

module.exports = function(Accounts) {
  //send verification email after registration
/*  Accounts.afterRemote('create', function(context, user, next) {
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
/*  Accounts.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' +
        info.accessToken.id + '">here</a> to reset your password';

    Accounts.app.models.Email.send({
      to: info.email,
      from: info.email,
      subject: 'Password reset',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });*/

  Accounts.observe('after save', function filterProperties(ctx, next) {
    //if (ctx.options && ctx.options.skipPropertyFilter) return next();
    if (ctx.instance && ctx.isNewInstance) {
      var account = ctx.instance;
      // Create profile for account
      account.profile(function (err, profile) {
        if (err) {
          console.log(err);
          return;
        }
        if (profile !== null)
          return;
        var data = {
          username: "",
          fullname: "",
          isFemale: false,
          isExpert: false,
          biology: "",
          status: "off_line"
        };
        account.profile.create(data, function(err, data) {
          if (err) {
            console.log(err);
          }
          console.log(data);
          }
        );
      });
    }
    next();
  });
};
