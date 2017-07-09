angular.module('flash-card')
.controller('CardBasicCtrl', function() {

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