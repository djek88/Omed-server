'use strict';

module.exports = function(Additional) {
  Additional.remoteMethod('medDocumentConfigurations', {
    description: 'Return med document configurations.',
    http: {path: '/med-document-configurations', verb: 'get'},
    accepts: [],
    returns: {type: 'object', root: true},
  });

  Additional.remoteMethod('postFileConfigurations', {
    description: 'Return post file configurations.',
    http: {path: '/post-file-configurations', verb: 'get'},
    accepts: [],
    returns: {type: 'object', root: true},
  });

  Additional.remoteMethod('postImageConfigurations', {
    description: 'Return post image configurations.',
    http: {path: '/post-image-configurations', verb: 'get'},
    accepts: [],
    returns: {type: 'object', root: true},
  });

  Additional.medDocumentConfigurations = function(next) {
    next(null, Additional.app.get('medDocument'));
  };

  Additional.postFileConfigurations = function(next) {
    next(null, Additional.app.get('postFile'));
  };

  Additional.postImageConfigurations = function(next) {
    next(null, Additional.app.get('postImage'));
  };
};
