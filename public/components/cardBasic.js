angular.module('flash-card')
.controller('CardBasicCtrl', function() {

})

.component('cardBasic', {
  bindings: {
    populateCard: '<',
    editable: '<',
    card: '<',
    hideSubmit: '<'
  },
  controller: 'CardBasicCtrl',
  templateUrl: './templates/cardBasic.html'
});