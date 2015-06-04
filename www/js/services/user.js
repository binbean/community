angular.module('ec.services')
.factory('User', function($resource, $log) {
	var resource =  $resource('http://127.0.0.1:8080/ec-web/api/users', {
  }, {
    query: {
      method: 'get',
      params: {
        tab: 'all',
        page: 1,
        limit: 10,
        mdrender: true
      },
      timeout: 20000
    }
  });

  return {
  	saveUser: function(newUser){
  		return resource.save(newUser);
  	}
  }
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
  		alert("ajflasfjlsaf");
      return chats;
    }
  }
});
