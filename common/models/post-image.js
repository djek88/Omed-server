'use strict';

module.exports = function(PostImage) {
  PostImage.disableRemoteMethodByName('getContainers');
  PostImage.disableRemoteMethodByName('createContainer');
  PostImage.disableRemoteMethodByName('destroyContainer');
  PostImage.disableRemoteMethodByName('getContainer');
  PostImage.disableRemoteMethodByName('uploadStream');
  PostImage.disableRemoteMethodByName('downloadStream');
  PostImage.disableRemoteMethodByName('getFiles');
  PostImage.disableRemoteMethodByName('getFile');
  PostImage.disableRemoteMethodByName('removeFile');
  PostImage.disableRemoteMethodByName('upload');
};
