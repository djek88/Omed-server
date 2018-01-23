'use strict';

const ApiError = require('../../server/lib/error/Api-error');

module.exports = function(Meduser) {
  Meduser.validatesInclusionOf('sex', {in: ['male', 'female']});
  Meduser.validatesInclusionOf('area', {in: ['medical', 'dental']});
  Meduser.validatesInclusionOf('type', {in: ['student', 'doctor']});
  Meduser.validatesInclusionOf('degree', {in: ['1', '2', '3', '4', '5', '6', '7', '8', 'intern1', 'intern2', 'resident1', 'resident2', 'resident3', 'resident4', 'resident5', 'generalist', 'regular', 'assistant', 'agrege', 'es']}); // eslint-disable-line max-len
  Meduser.validatesInclusionOf('maritalStatus', {in: ['single', 'engaged', 'married']}); // eslint-disable-line max-len

  Meduser.remoteMethod('uploadMedDocument', {
    isStatic: false,
    description: 'Upload med document img.',
    http: {path: '/upload-med-document', verb: 'post'},
    accepts: [
      {arg: 'req', type: 'object', 'http': {source: 'req'}},
      {arg: 'res', type: 'object', 'http': {source: 'res'}},
    ],
    returns: {type: 'object', root: true},
  });

  Meduser.prototype.uploadMedDocument = function(req, res, next) {
    const Container = Meduser.app.models.MedUserMedDocument;
    const medUser = this;
    const medUserId = medUser.id.toString();

    // if don't have file
    if (!req._readableState.length) {
      return next(ApiError.incorrectParam('file'));
    }

    Container.getContainers((err, containers) => {
      if (err) return next(err);

      if (containers.some((c) => c.name === medUserId)) {
        return uploadFile();
      }

      Container.createContainer({name: medUserId}, (err, c) => {
        if (err) return next(err);
        uploadFile();
      });
    });

    function uploadFile() {
      const supportedTypes = Meduser.app.get('medDocument').supportedTypes;
      const maxFileSize = Meduser.app.get('medDocument').maxSize * 1024 * 1024;
      const options = {
        container: medUserId,
        allowedContentTypes: Object.values(supportedTypes),
        maxFileSize: maxFileSize,
      };

      Container.upload(req, res, options, updateMedUser);
    }

    function updateMedUser() {
      if (arguments[0] instanceof Error) return next(arguments[0]);

      const file = arguments[1].files.file[0];
      medUser.medDocuments.push({
        name: file.name,
        originalFileName: file.originalFilename,
        createdAt: new Date(),
      });
      medUser.updateAttributes({medDocuments: medUser.medDocuments}, next);
    }
  };
};
