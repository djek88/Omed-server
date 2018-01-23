'use strict';

module.exports = function(Company) {
  Company.validatesUniquenessOf('name');
};
