'use strict';

module.exports = function(Meduser) {
  Meduser.validatesInclusionOf('sex', {in: ['male', 'female']});
  Meduser.validatesInclusionOf('area', {in: ['medical', 'dental']});
  Meduser.validatesInclusionOf('type', {in: ['student', 'doctor']});
  Meduser.validatesInclusionOf('degree', {in: ['1', '2', '3', '4', '5', '6', '7', '8', 'intern1', 'intern2', 'resident1', 'resident2', 'resident3', 'resident4', 'resident5', 'generalist', 'regular', 'assistant', 'agrege', 'es']}); // eslint-disable-line max-len
  Meduser.validatesInclusionOf('maritalStatus', {in: ['single', 'engaged', 'married']}); // eslint-disable-line max-len
};
