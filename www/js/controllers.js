angular.module('starter.controllers', ['ui.bootstrap'])

.controller('DashCtrl', function($scope, $ionicModal, $ionicActionSheet) {
	$scope.items = [{name:'111111', loc:'aaaaa', distance: '1.1'}, {name:'22222', loc:'bbbbb', distance: '2.2'}];
	$ionicModal.fromTemplateUrl('location-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.openLoginModal = function() {
    $scope.loginModal.show();
  };
  $scope.closeLoginModal = function() {
    $scope.loginModal.hide();
  };

  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }

  $scope.selectedLoc = '选择小区';
  $scope.selectedConfirm = function(selectedItem) {
    var selectedText = '确定选择'+selectedItem+'吗?';

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     destructiveText: '确定',
     titleText: selectedText,
     cancelText: '取消',
     cancel: function() {
       // add cancel code..
     	 hideSheet();
     },
     buttonClicked: function(index) {
       hideSheet();
       //$scope.closeModal();
       //return true;
     },
     destructiveButtonClicked: function(){
       $scope.selectedLoc = selectedItem;
       hideSheet();
       $scope.closeModal();
     }
   });

 };
})

.controller('DashIntroCtrl', function($scope){

})

.controller('DashNotifiesCtrl', function($scope){

})

.controller('DashNotifyCtrl', function($scope){

})

.controller('DashTelCtrl', function($scope){

})

.controller('DashFixCtrl', function($scope){
  $scope.fix = {
    title: "",
    description: ""
  }

})

.controller('ConvenientCtrl', function($scope){

})

.controller('ChatsCtrl', function($scope, Chats, $stateParams) {
  if($stateParams.t == "undefined") {
    $stateParams.t = 1;
  }
  $scope.likeCount = 0;
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
  $scope.likeClick = function(chatId){
    $scope.chat = Chats.get(chatId);
    $scope.chat.likeCount += 1;
  }
})

.controller('ChatsComposeCtrl', function($scope){

})

.controller('ChatsMyCtrl', function($scope){

})

.controller('ChatsMyDetailCtrl', function($scope){

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $ionicModal) {

  $ionicModal.fromTemplateUrl('login-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.loginModal = modal;
  });

  $ionicModal.fromTemplateUrl('signup-modal.html', {
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

  $scope.settings = {
    enableFriends: true
  };
})

.controller('AccountProfileCtrl', function($scope, $stateParams, Chats) {
  //$scope.account = Chats.get($stateParams.accountId);
});
