angular.module('flash-card')
.controller('CardImageCtrl', function() {
  this.newImage = '';
  this.change = {
    input: true,
    photo: false
  };

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

  this.setImage = function(input) {
    console.log(this);
    console.log(input);
    this.newImage = input;
  }

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