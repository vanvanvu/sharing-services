'use strict';

var webRTC = require('../../quickblox/config');

module.exports = function(Conversation) {
    //New session for conversation
    Conversation.session = function (params, cb) {
        if(params) {
            webRTC.QB.createSession(params, function(err, result) {
                console.log('Session create callback', err, result);
                if (err) {
                    cb(null, err);
                }
                Conversation.create({sessionToken: result}, function(err, instance) {
                    if (err) {
                        cb(null, err);
                        return;
                    }
                    cb(null, instance);
                });
                cb(null, {});
            };
        } else {
            webRTC.QB.createSession(function(err, result) {
                console.log('Session create callback', err, result);
                if (err) {
                    cb(null, err);
                }
                Conversation.create({sessionToken: result}, function(err, instance) {
                    if (err) {
                        cb(null, err);
                        return;
                    }
                    cb(null, instance);
                });
                cb(null, {});
            };
        }
    }
    Conversation.remoteMethod('session', {
            accepts: {arg: 'params', type: 'string'},
            returns: [
            {arg: 'result', type: 'object'}
            ]
    });

    /*Sign-up a new user
    params = {'login': "emporio", 'password': "somepass", 'tag': "man"}
    */
    Conversation.signup = function (params, cb) {
        webRTC.QB.users.create(params, function(err, result) {
            console.log('sign-up a new user', err, result);
            if (err) {
                cb(null, err);
            }
            cb(null, {});
        };
    }
    Conversation.remoteMethod('signup', {
            accepts: {arg: 'params', type: 'object', require: true},
            returns: [
            {arg: 'result', type: 'object'}
            ]
    });

    /*Sign-in
    params = {'login': "emporio", 'password': "somepass"}
    */
    Conversation.signin = function (params, cb) {
        webRTC.QB.login(params, function(err, user) {
            console.log('Login to quickblox server', err, result);
            if (user) {
                cb(null, {});       
            } else {
                cb(null, err);
            }
        };
    }
    Conversation.remoteMethod('signin', {
            accepts: {arg: 'params', type: 'object', require: true},
            returns: [
            {arg: 'result', type: 'object'}
            ]
    });

    /*Sign-in third-party
    params = {'provider': "twitter", 'keys[token]': "...", 'keys[secret]': "..."}
    */
    Conversation.signin3rd = function (params, cb) {
        webRTC.QB.login(params, function(err, user) {
            console.log('Login to quickblox server', err, result);
            if (user) {
                cb(null, {});       
            } else {
                cb(null, err);
            }
        };
    }
    Conversation.remoteMethod('signin3rd', {
            accepts: {arg: 'params', type: 'object', require: true},
            returns: [
            {arg: 'result', type: 'object'}
            ]
    });
};
