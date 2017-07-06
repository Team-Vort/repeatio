angular.module('flash-card')
.controller('CardBasicCtrl', function() {
  this.dataObj = {
    front: 'Knock Knock',
    back: 'Who\'s There?'
  };
})

.component('cardBasic', {
  bindings: {
    populateCard: '<'
  },
  controller: 'CardBasicCtrl',
  templateUrl: './templates/cardBasic.html'
});