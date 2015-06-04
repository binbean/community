angular.module('ec.controllers')
.controller('AccountCtrl', function($scope, $rootScope, $ionicModal, $ionicLoading, $log, $timeout, User) {

  $ionicModal.fromTemplateUrl('templates/login-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  $ionicModal.fromTemplateUrl('templates/signup-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.signupModal = modal;
  });

  $scope.openLoginModal = function() {
    $scope.loginModal.show();
  };
  $scope.closeLoginModal = function() {
    $scope.loginModal.hide();
  };

  $scope.openSignupModal = function() {
    $scope.loginModal.hide();
    $scope.signupModal.show();
  };
  $scope.closeSignupModal = function() {
    $scope.signupModal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.loginModal.remove();
    $scope.signupModal.remove();
  });
  $scope.account = null;

  $scope.login = function(){
    $scope.account = {
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?You on your way?You on your way?You on your way?You on your way?',
      face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    };
    $scope.loginModal.hide();
  }
  $scope.logout = function(){
    $scope.account = null;
  }
  $scope.loginRequired = function(){
    if($scope.account == null){
      $scope.loginModal.show();
    }
  }

  $scope.user = {
    username: "",
    password: "",
    realname: "",
    email: ""
  };
  $scope.signup = function(){

    alert($scope.user.username);
    $log.debug('new user data:', $scope.user);
    $ionicLoading.show();
    $scope.user.state=1;
    User.saveUser($scope.user).$promise.then(function(response) {
      $ionicLoading.hide();
      alert(response['msg']);
      //$scope.newTopicId = response['topic_id'];
      $scope.closeSignupModal();
      $timeout(function() {
        /*
        $state.go('app.topic', {
          id: $scope.newTopicId
        });*/
        $timeout(function() {
          //$scope.doRefresh();
        }, 300);
      }, 300);
    }, $rootScope.requestErrorHandler);

  }
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AccountProfileCtrl', function($scope, $stateParams, Chats) {
  //$scope.account = Chats.get($stateParams.accountId);
});
