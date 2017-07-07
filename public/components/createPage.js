angular.module('flash-card')
.controller('CreatePageCtrl', function($http, $location){
  var currentUser = localStorage.getItem('currentUser');
  this.newDeck = {username: currentUser};
  this.newDeck.cards = [];
  this.newCard = {plaintextFront: true, plaintextBack: true};
  this._cardType = "basic";
  this.typeSelected = false;
  //Do not modify _cardType directly, use getters and setters.
  /* Card types:
    "basic" - just text on front and back, no way to enter an answer
    "image" - flashcard with embedded image. no way to enter an answer
    "multiple choice" - flashcard with up to 5 answer options and only one correct answer
    "true/false" - flashcard with a binary true/false answer
    "short answer" - flashcard with textbox for answers.

    For basic, image, and short answer cards, the user must self-grade.  Multiple choice and true/false answers are automatically graded.

  */
  this.defaultCardData = {
    multipleChoice: {
      question: 'Enter A question here',
      answer: 'Enter the message to be displayed for a correct answer here.',
      correctOption: 'a',
      options: {
        a: 'foo',
        b: 'bar',
        c: 'this = that',
        d: '0/0',
        e: 'NaN == NaN'
      }
    }
  };


  this.getCardType = function() {
    //This returns a copy of the string so it cannot be mutated
    console.log('getCardType returns: ', this._cardType.split('').slice().join(''));
    return this._cardType.split('').slice().join('');
  };

  this.setCardType = function(s) {
    s = s.toLowerCase();
    console.log('setCardType string: ',s);
    var validTypes = "basic,image,multiple choice, true/false, short answer";

    //only set type if valid
    if (validTypes.includes(s)) {
      this._cardType = s;
      console.log('card type set to: ', this._cardType);
      //toggle typeSelected to show correct HTML using ng-show
      this._typeSelcted();
      return 1;
    } else {
      //error handling- return -1 if invalid string passed
      return -1;
    }
  }.bind(this);

  this._typeSelcted = function() {
    this.typeSelected = true;
  };

  this.populateCard = function (cardtype,dataObj) {
    console.log('populateCard was called in createPage.js')
    if(cardtype === 'basic') {
      if(!dataObj.front || !dataObj.back) {
        alert("Please fill out a card");
        return;
      } else {
        this.newCard.front = dataObj.front;
        this.newCard.back = dataObj.back;
      }
    }

    if(cardtype === 'multiple choice') {
      if(!dataObj.answer || !dataObj.question) {
        alert("Please fill out required fields");
        return;
      } else {

        //Make a copy of the object
        this.newCard.data = {};
        var tempOptions = {};
        for (var j in dataObj.options) {
          tempOptions[j] = dataObj.options[j];
        }
        this.newCard.data.options = tempOptions;
        for (var k in dataObj) {
          if (k !== 'options') {
            this.newCard.data[k] = dataObj[k];
          }
        }
        console.log('multiple choice card about to be added to deck: ', this.newCard);
      }
    }
    this.addCard(this.newCard);
  }.bind(this);

  this.addCard = function(newCard) {
    console.log('addCard was called on createPage.js');
    //set card type on newCard.
    this.newCard.cardtype = this._cardType;
    this.newDeck.cards.push(newCard);
    console.log('Card was just added to new deck: ', this.newDeck);
    this.newCard = {plaintextFront: true, plaintextBack: true};
    $('#createQuestionField').focus();

  };

  this.handleSave = function() {
    if(!this.newDeck.deckname) {
      alert("Please enter a deck name");
    } else {
      console.log('NEW DECK', this.newDeck);
      // post goes back to with user info
      $http.post('/decks?username=' + localStorage.getItem('currentUser'), this.newDeck).then(function() {
        $http.get('/decks', {params: {username: localStorage.getItem('currentUser')}}).then(function(response) {
          localStorage.setItem('decks', JSON.stringify(response.data));
          $location.path('/app');
        }, function(err) {console.error('handleSave, CREATE', err);});
      });
    }
  };

  this.deleteCard = function(card) {
    if (confirm('Are you sure you want to delete this card?')) {
      var i = this.newDeck.cards.indexOf(card);
      this.newDeck.cards.splice(i,1);
    }
  };

  this.moveUp = function(card) {
    var index = this.newDeck.cards.indexOf(card);
    if(index === 0) {
      return;
    } else {
      var temp = this.newDeck.cards[index - 1];
      this.newDeck.cards[index - 1] = this.newDeck.cards[index];
      this.newDeck.cards[index] = temp;
    }
  };

  this.moveDown = function(card) {
    var index = this.newDeck.cards.indexOf(card);
    if(index === this.newDeck.cards.length-1) {
      return;
    } else {
      var temp = this.newDeck.cards[index + 1];
      this.newDeck.cards[index + 1] = this.newDeck.cards[index];
      this.newDeck.cards[index] = temp;
    }
  };

  this.toggleHighlightFront = function(card) {
    card.plaintextFront = !card.plaintextFront;
  };

  this.toggleHighlightBack = function(card) {
    card.plaintextBack = !card.plaintextBack;
  };

})
.component('createPage', {
  controller: 'CreatePageCtrl',
  templateUrl: './templates/createPage.html' //calling from index.html
});
