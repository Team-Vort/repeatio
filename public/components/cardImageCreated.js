angular.module('flash-card')
.controller('CardImageCreatedCtrl', function() {

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
  }
})

.component('cardImageCreated', {
  controller: 'CardImageCreatedCtrl',
  bindings: {
    populateCard: '<',
    editable: '<',
    card: '<',
    hideSubmit: '<'
  },
  templateUrl: './templates/cardImageCreated.html'
});