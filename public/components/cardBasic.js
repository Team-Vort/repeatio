angular.module('flash-card')
.controller('CardBasicCtrl', function() {
  this.front = 'Knock Knock';
  this.back = 'Who\'s There?';

})

.component('cardBasic', {
  bindings: {
    populateCard: '<'
  },
  controller: 'CardBasicCtrl',
  templateUrl: './templates/cardBasic.html'
});