angular.module('flash-card')
.controller('CardMultipleChoiceCtrl', function() {
  this.front='null';
  this.back='null';

  this.showSentMsg = false;
  // this.dataObj = {
  //   question: 'Enter A question here',
  //   answer: 'Enter the message to be displayed for a correct answer here.',
  //   correctOption: 'a',
  //   options: {
  //     a: 'foo',
  //     b: 'bar',
  //     c: 'this = that',
  //     d: '0/0',
  //     e: 'NaN == NaN'
  //   }
  // };

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

  this.setCorrectAnswer = function (ans) {
    this.card.correctOption = ans;
  };

  this.toggleSentMsg = function () {
    this.showSentMsg = !this.showSentMsg;
    console.log('showSentMsg Toggled: ', this.showSentMsg);

    var innerToggle = function() {
      this.showSentMsg = !this.showSentMsg;
      console.log('inner Toggle toggled', this.showSentMsg);
    }.bind(this);

    setTimeout( innerToggle, 4000);

  }.bind(this);
})

.component('cardMultipleChoice', {
  controller: 'CardMultipleChoiceCtrl',
  bindings: {
    populateCard: '<',
    editable: '<',
    card: '<',
    hideSubmit: '<'
  },
  templateUrl: './templates/cardMultipleChoice.html'
});