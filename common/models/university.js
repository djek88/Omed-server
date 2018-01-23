'use strict';

module.exports = function(University) {
  University.validatesUniquenessOf('name');
};
