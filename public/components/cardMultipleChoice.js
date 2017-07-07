angular.module('flash-card')
.controller('CardMultipleChoiceCtrl', function() {
  this.front='null';
  this.back='null';
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

  this.isTwoOptions = function() {
    var cnt = 0;

    for (var k in this.dataObj.options) {
      if(this.options[k]) {
        cnt++;
      }
    }

    return cnt >= 2 ? true : false;
  };


  this.setCorrectAnswer = function (ans) {
    this.card.correctOption = ans;
  };
})

.component('cardMultipleChoice', {
  controller: 'CardMultipleChoiceCtrl',
  bindings: {
    populateCard: '<',
    editable: '<',
    card: '<'
  },
  templateUrl: './templates/cardMultipleChoice.html'
});