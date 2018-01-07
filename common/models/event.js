'use strict';

module.exports = function(Event) {
  Event.validatesInclusionOf('category', {in: ['Cours/Atelier', 'Conférence/Congrès/Séminaire', 'Concours', 'Forum/Rencontre', 'Journées scientifiques', 'Salon', 'Table ronde', 'Caravane médicale', 'Autre']}); // eslint-disable-line max-len
};
