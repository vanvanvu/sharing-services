'use strict';

// Create default Admin for control Database
module.exports = function(app) {
 /*   var Accounts = app.models.accounts;

    var adminAccount = {username: 'admin1', email: 'admin1@test.com', password: 'admin1'};

    Accounts.findOrCreate({where: {email: adminAccount.email}}, adminAccount)
    .then (function(data) {
        var account = data[0];
        if (data[1] == true)
            return;
        Role.create({name: 'admin'}, function(err, role) {
            if (err) return debug(err);
            debug(role);
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: account.id
            }, function(err, principal) {
                if (err) return debug(err);
                debug(principal);
            });
        });
    })
    .catch(function (err) {
        console.error(err);
    });*/
};
