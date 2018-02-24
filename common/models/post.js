'use strict';

const ApiError = require('../../server/lib/error/Api-error');

module.exports = function(Post) {
  Post.remoteMethod('uploadImage', {
    isStatic: false,
    description: 'Upload attached post image.',
    http: {path: '/upload-image', verb: 'post'},
    accepts: [
      {arg: 'req', type: 'object', 'http': {source: 'req'}},
      {arg: 'res', type: 'object', 'http': {source: 'res'}},
    ],
    returns: {type: 'object', root: true},
  });

  Post.remoteMethod('uploadFile', {
    isStatic: false,
    description: 'Upload attached post file.',
    http: {path: '/upload-file', verb: 'post'},
    accepts: [
      {arg: 'req', type: 'object', 'http': {source: 'req'}},
      {arg: 'res', type: 'object', 'http': {source: 'res'}},
    ],
    returns: {type: 'object', root: true},
  });

  Post.prototype.uploadImage = function(req, res, next) {
    const Container = Post.app.models.PostImage;
    const post = this;
    const postId = post.id.toString();

    // if don't have file
    if (!req._readableState.length) {
      return next(ApiError.incorrectParam('file'));
    }

    setTimeout(() => {
      Container.getContainers((err, containers) => {
        if (err) return next(err);

        if (containers.some((c) => c.name === postId)) {
          return uploadFile();
        }

        Container.createContainer({name: postId}, (err, c) => {
          if (err) return next(err);
          uploadFile();
        });
      });
    }, (Math.floor(Math.random() * (50 - 10)) + 10));

    function uploadFile() {
      const supportedTypes = Post.app.get('postImage').supportedTypes;
      const maxFileSize = Post.app.get('postImage').maxSize * 1024 * 1024;
      const options = {
        container: postId,
        allowedContentTypes: Object.values(supportedTypes),
        maxFileSize: maxFileSize,
      };

      Container.upload(req, res, options, updatePost);
    }

    function updatePost() {
      if (arguments[0] instanceof Error) return next(arguments[0]);

      const file = arguments[1].files.file[0];
      post.images.push({
        name: file.name,
        originalFileName: file.originalFilename,
        createdAt: new Date(),
      });
      post.updateAttributes({images: post.images}, next);
    }
  };

  Post.prototype.uploadFile = function(req, res, next) {
    const Container = Post.app.models.PostFile;
    const post = this;
    const postId = post.id.toString();

    // if don't have file
    if (!req._readableState.length) {
      return next(ApiError.incorrectParam('file'));
    }

    setTimeout(() => {
      Container.getContainers((err, containers) => {
        if (err) return next(err);

        if (containers.some((c) => c.name === postId)) {
          return uploadFile();
        }

        Container.createContainer({name: postId}, (err, c) => {
          if (err) return next(err);
          uploadFile();
        });
      });
    }, (Math.floor(Math.random() * (50 - 10)) + 10));

    function uploadFile() {
      const supportedTypes = Post.app.get('postFile').supportedTypes;
      const maxFileSize = Post.app.get('postFile').maxSize * 1024 * 1024;
      const options = {
        container: postId,
        allowedContentTypes: Object.values(supportedTypes),
        maxFileSize: maxFileSize,
      };

      Container.upload(req, res, options, updatePost);
    }

    function updatePost() {
      if (arguments[0] instanceof Error) return next(arguments[0]);

      const file = arguments[1].files.file[0];
      post.files.push({
        name: file.name,
        originalFileName: file.originalFilename,
        createdAt: new Date(),
      });
      post.updateAttributes({files: post.files}, next);
    }
  };
};
