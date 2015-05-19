angular.module('starter.controllers', [])

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

.controller('DashTelCtrl', function($scope){

})

.controller('ConvenientCtrl', function($scope){

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.account = {
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?You on your way?You on your way?You on your way?You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  };
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AccountDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.account = Chats.get($stateParams.accountId);
});
