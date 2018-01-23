'use strict';

module.exports = function(Additional) {
  Additional.remoteMethod('medDocumentConfigurations', {
    description: 'Return med document configurations.',
    http: {path: '/med-document-configurations', verb: 'get'},
    accepts: [],
    returns: {type: 'object', root: true},
  });

  Additional.medDocumentConfigurations = function(next) {
    next(null, Additional.app.get('medDocument'));
  };
};
