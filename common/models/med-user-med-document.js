'use strict';

module.exports = function(MedUserMedDocument) {
  MedUserMedDocument.disableRemoteMethodByName('getContainers');
  MedUserMedDocument.disableRemoteMethodByName('createContainer');
  MedUserMedDocument.disableRemoteMethodByName('destroyContainer');
  MedUserMedDocument.disableRemoteMethodByName('getContainer');
  MedUserMedDocument.disableRemoteMethodByName('uploadStream');
  MedUserMedDocument.disableRemoteMethodByName('downloadStream');
  MedUserMedDocument.disableRemoteMethodByName('getFiles');
  MedUserMedDocument.disableRemoteMethodByName('getFile');
  MedUserMedDocument.disableRemoteMethodByName('removeFile');
  MedUserMedDocument.disableRemoteMethodByName('upload');
};
