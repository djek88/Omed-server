'use strict';

module.exports = function(Hospital) {
  Hospital.validatesUniquenessOf('name');
};
