// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.dash-intro', {
    url: '/dash/intro',
    views: {
      'tab-dash': {
        templateUrl: 'templates/dash-intro.html',
        controller: 'DashIntroCtrl'
      }
    }
  })

  .state('tab.dash-notifies', {
    url: '/dash/notifies',
    views: {
      'tab-dash': {
        templateUrl: 'templates/dash-notifies.html',
        controller: 'DashNotifiesCtrl'
      }
    }
  })
  .state('tab.dash-notify', {
    url: '/dash/notify/:notifyId',
    views: {
      'tab-dash': {
        templateUrl: 'templates/dash-notify.html',
        controller: 'DashNotifyCtrl'
      }
    }
  })

  .state('tab.dash-tel', {
    url: '/dash/tel',
    views: {
      'tab-dash': {
        templateUrl: 'templates/dash-tel.html',
        controller: 'DashTelCtrl'
      }
    }
  })

  .state('tab.dash-fix', {
    url: '/dash/fix',
    views: {
      'tab-dash': {
        templateUrl: 'templates/dash-fix.html',
        controller: 'DashFixCtrl'
      }
    }
  })

  .state('tab.convenient', {
    url: '/convenient',
    views: {
      'tab-convenient': {
        templateUrl: 'templates/tab-convenient.html',
        controller: 'ConvenientCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

  .state('tab.chats-compose', {
      url: '/chats/compose',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-compose.html',
          controller: 'ChatsComposeCtrl'
        }
      }
    })

  .state('tab.chats-my', {
      url: '/chats/my',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-my.html',
          controller: 'ChatsMyCtrl'
        }
      }
    })

  .state('tab.chats-my-detail', {
      url: '/chat/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chats-my-detail.html',
          controller: 'ChatsMyDetailCtrl'
        }
      }
    })

    /*

    .state('tab.chat-detail', {
      url: '/chat/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })*/

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.account－profile', {
    url: '/account/profile',
    views: {
      'tab-account': {
        templateUrl: 'templates/account-profile.html',
        controller: 'AccountProfileCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
