angular.module('ec.services')
.factory('Notify', function() {
	var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?You on your way?You on your way?You on your way?You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    likeCount: 0
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me.Hey, it\'s meHey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
    likeCount: 0
  }];

  return {
  	all: function() {
  		alert("ajflasfjlsaf");
      return chats;
    }
  }
});
