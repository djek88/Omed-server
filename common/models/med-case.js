'use strict';

module.exports = function(Medcase) {
  Medcase.validatesInclusionOf('sex', {in: ['male', 'female']});
};
