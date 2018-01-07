'use strict';

module.exports = function(Listing) {
  Listing.validatesInclusionOf('category', {in: ['Garde/Permutation', 'Remplacement', 'Offre d’emploi', 'Cession/Location de cabinet', 'Colocation', 'Vente de matériel', 'Formation', 'Dons/Bénévolat', 'Autre']}); // eslint-disable-line max-len
};
