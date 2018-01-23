'use strict';

module.exports = function(Specialty) {
  Specialty.validatesUniquenessOf('name');
};
