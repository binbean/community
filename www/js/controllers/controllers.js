angular.module('ec.controllers')

.controller('DashCtrl', function($scope, $ionicModal, $ionicActionSheet) {

  $scope.items = [{name:'111111', loc:'aaaaa', distance: '1.1'}, {name:'22222', loc:'bbbbb', distance: '2.2'}];
  $ionicModal.fromTemplateUrl('templates/location-modal.html', {
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
})

.controller('DashIntroCtrl', function($scope){

})

.controller('DashNotifiesCtrl', function($scope, Notify, Chats){
  Notify.all();
  alert(Chats.all());
})

.controller('DashNotifyCtrl', function($scope){

})

.controller('DashTelCtrl', function($scope){

})

.controller('DashFixCtrl', function($scope, $log){
  $scope.fix = {
    title: "",
    content: ""
  }
  $scope.save = function(){
    alert($scope.fix.title);
    $log.debug('new user data:', $scope.fix);
    //$ionicLoading.show();
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
});
