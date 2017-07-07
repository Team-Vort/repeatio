angular.module('flash-card')

.controller('LoginCtrl', function(loginSvc, $location, $http, $scope){

  this.login = function() {
    var that = this;
    loginName = this.loginName;
    loginPw = this.loginPw;
    loginSvc.login(loginName, loginPw, function(res) {
      if (res.error) {
        console.error(res.error);
      } else if (res.data === 'OK') {
        $http.get('/decks', {params: {username: loginName}}).then(function(response) {
          localStorage.setItem('currentUser', loginName);
          localStorage.setItem('decks', JSON.stringify(response.data));
          $location.path('/app');
        }, function(error) {console.error(error);});
      } else if (res.data === 'NO') {
        alert('Incorrect username or password, please try again.');
        that.loginName = '';
        that.loginPw = '';
        $('#loginName').focus();
      }
    });
  };

  this.reset = function(){
    var that = this;
    resetCode = this.resetCode;
    newPassword = this.newPassword;
    newPasswordConfirm = this.newPasswordConfirm;
    username = $scope.email;
    console.log($scope.email);
    loginSvc.reset(username, resetCode, newPassword, function(res) {
      if(this.newPassword !== this.newPasswordConfirm && res.data === "MATCH"){
        alert('Your passwords do not match; please check and try again.');
        that.newPassword = '';
        that.newPasswordConfirm = '';
      }else if(this.newPassword === this.newPasswordConfirm && res.data = "MATCH"){

      }
    })


  }

  this.signup = function() {
    var that = this;
    accName = this.accName;
    accPw = this.accPw;
    accVerifyPw = this.accVerifyPw;
    loginSvc.signup(accName, accPw, function(res) {
      if (this.accPw !== this.accVerifyPw && res.data === 'NO') {
        alert('Username taken; please try another username.');
        that.accName = '';
        that.accPw = '';
        that.accVerifyPw = '';
      }
      else if (this.accPw !== this.accVerifyPw) {
        alert('Your passwords do not match; please check and try again.');
        that.accPw = '';
        that.accVerifyPw = '';
      } else if (res.error) {
        console.error(res.error);
      } else if (res.data === 'OK') {
        localStorage.setItem('currentUser', accName);
        localStorage.setItem('decks', JSON.stringify([]));
        $location.path('/app');
      } else if (res.data === 'NO') {
        alert('Username taken; please try another username.');
        that.accName = '';
        that.accPw = '';
        that.accVerifyPw = '';
        $('#accName').focus();
      }
    });
  };

  $scope.show = false;
  $scope.email;
  $scope.forgotPassword = function(){
    this.email = prompt('What is the email associated with your account?');
    $scope.email = this.email;
    this.resetCode = Math.floor(Math.random() * 1000000);
    $http.post('http://localhost:3000/forgotpassword', JSON.stringify({email: this.email, resetCode: this.resetCode})).then(function(){
        alert("A password reset code has been sent to " + $scope.email);
        $scope.show = !$scope.show;
      })
    }
  })

.component('login', {
  controller: 'LoginCtrl',
  templateUrl: './templates/login.html' //calling from index.html
})
.service('loginSvc', function($http) {
  this.login = function(username, password, callback) {
    var url = 'http://localhost:3000/login';
    $http.post(url, JSON.stringify({username: username, password:password}))
      .then(function successCallback(response) {
        callback(response);
      },
      function errorCallback(response) {
        callback(response);
      });
  };
  this.signup = function(username, password, callback) {
    var url = 'http://localhost:3000/signup';
    $http.post(url, JSON.stringify({username: username, password:password}))
      .then(function successCallback(response) {
        callback(response);
      },
      function errorCallback(response) {
        callback(response);
      });
  };
});
