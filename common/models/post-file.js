'use strict';

module.exports = function(PostFile) {
  PostFile.disableRemoteMethodByName('getContainers');
  PostFile.disableRemoteMethodByName('createContainer');
  PostFile.disableRemoteMethodByName('destroyContainer');
  PostFile.disableRemoteMethodByName('getContainer');
  PostFile.disableRemoteMethodByName('uploadStream');
  PostFile.disableRemoteMethodByName('downloadStream');
  PostFile.disableRemoteMethodByName('getFiles');
  PostFile.disableRemoteMethodByName('getFile');
  PostFile.disableRemoteMethodByName('removeFile');
  PostFile.disableRemoteMethodByName('upload');
};
