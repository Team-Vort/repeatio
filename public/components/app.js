angular.module('flash-card')
.controller('AppCtrl', function($http, $timeout) {
  var that = this;
  var currentUser = localStorage.getItem('currentUser');
  var currentDecks = JSON.parse(localStorage.getItem('decks'));
  this.categories = [];
  this.names = [];
  this.getGroups = function() {
    for (var i = 0; i<currentDecks.length; i++) {
      if(this.names.indexOf(currentDecks[i].groupname) === -1){
        this.names.push(currentDecks[i].groupname);
        this.categories.push({"group": currentDecks[i].groupname});
      }
    }
  }
  this.getGroups();

  this.show = false;
  this.getGroupDecks = function(group){
    this.currentGroup = group.group;
    this.setDecks();
    this.show = !this.show;
  }

  this.setDecks = function() {
      that.allDecks = JSON.parse(localStorage.getItem('decks'));
      that.decks = [];
      for (var j = 0; j<that.allDecks.length; j++){
        if(that.allDecks[j].groupname === this.currentGroup){
          that.decks.push(that.allDecks[j]);
        }
      }

  };
  this.getDeck = function(deck){
    localStorage.setItem('currentDeck', JSON.stringify(deck));
  };

  this.myDeck;
  this.handleDelete = function(deck) {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })

    var id = deck._id;
    $http.delete('/decks/' + id).then(function() {
      $http.get('/decks', {
        params: {
          username: currentUser
        }
      }).then(function(res) {
        localStorage.setItem('decks', JSON.stringify(res.data));
        that.decks = res.data;
      }, function(error) {
        console.error(error);
      });
    }, function(error) {
      console.error(error);
    });

};

})
.component('app', {
  controller: 'AppCtrl',
  templateUrl: './templates/app.html',
});
