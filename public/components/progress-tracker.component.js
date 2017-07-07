(function () { // to keep the variables escaping in to the global scope
  'use strict';

  var module = angular.module('flash-card');
  function controller ($scope) {
    var model = this;
    var currentDeck = JSON.parse(localStorage.getItem('currentDeck'));

    var getCurrentDecksCardsLength = function () {
      return currentDeck.cards.length;
    }

    model.curCard = 1; // set current card number to 1 initially.

    $scope.$on('onClickNext', function(event, data){
      model.curCard = data;
    })

    $scope.$on('onClickPrev', function(event, data){
      model.curCard = data;
    })

    model.totalCards = getCurrentDecksCardsLength();
  }

  module.component('progressTracker', {
    templateUrl: '../templates/progress-tracker.component.html',
    controllerAs: 'model',
    controller: ['$scope', controller]
  })

}());
