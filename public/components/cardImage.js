angular.module('flash-card')
.controller('CardImageCtrl', function() {
  this.clearFields = function() {
  this.card = {
    question: '',
    answer: '',
    photo: '',
    correctOption: 'a',
    options: {
      a: '',
      b: '',
      c: '',
      d: '',
      e: ''
    }
  };
  };

})

.component('cardImage', {
  controller: 'CardImageCtrl',
  bindings: {
    populateCard: '<',
    editable: '<',
    card: '<',
    hideSubmit: '<'
  },
  templateUrl: './templates/cardImage.html'
});