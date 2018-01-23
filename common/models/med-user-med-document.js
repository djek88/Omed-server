'use strict';

module.exports = function(Medusermeddocument) {
  Medusermeddocument.disableRemoteMethodByName('getContainers');
  Medusermeddocument.disableRemoteMethodByName('createContainer');
  Medusermeddocument.disableRemoteMethodByName('destroyContainer');
  Medusermeddocument.disableRemoteMethodByName('getContainer');
  Medusermeddocument.disableRemoteMethodByName('uploadStream');
  Medusermeddocument.disableRemoteMethodByName('downloadStream');
  Medusermeddocument.disableRemoteMethodByName('getFiles');
  Medusermeddocument.disableRemoteMethodByName('getFile');
  Medusermeddocument.disableRemoteMethodByName('removeFile');
  Medusermeddocument.disableRemoteMethodByName('upload');
};
