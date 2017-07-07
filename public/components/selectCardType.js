angular.module('flash-card')
.controller('SelectCardTypeCtrl', function($http, $location){

})
.component('selectCardType', {
  bindings: {
    setCardType: '<'
  },
  controller: 'SelectCardTypeCtrl',
  templateUrl: './templates/selectCardType.html' //calling from index.html
});