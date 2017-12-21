'use strict';

module.exports = function(Model, options) {
  Model.defineProperty('createdAt', {type: Date});
  Model.defineProperty('updatedAt', {type: Date});

  Model.observe('before save', (ctx, next) => {
    const now = Date.now();

    if (ctx.instance) {
      ctx.instance.updatedAt = now;
      ctx.instance.createdAt = now;
    } else {
      ctx.data.updatedAt = now;
      delete ctx.data.createdAt;
    }

    next();
  });
};
