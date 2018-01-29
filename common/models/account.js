'use strict';

const config = require('../../server/config.json');

module.exports = function(Account) {
  Account.on('resetPasswordRequest', function(info) {
    const url = `http://${config.client.domain}/login/change-password/${info.accessToken.id}`;
    const html = `Click <a href="${url}">here</a> to reset your password`;

    Account.app.models.Email.send({
      to: info.email,
      from: info.email,
      subject: 'Password reset',
      html: html,
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
    });
  });
};
