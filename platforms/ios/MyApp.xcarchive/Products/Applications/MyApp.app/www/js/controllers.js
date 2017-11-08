angular.module('starter.controllers', [])

  .controller('DashCtrl', function ($scope) {

    // 5分单个星
    $scope.starW1 = 100;
    $scope.one = 5;
    $scope.selectStar1 = function ($event) {
      var offset = $($event.target).offset();
      var x = $event.pageX;
      var left = offset.left;
      $scope.starW1 = Math.ceil((x - left) / 10) * 10;
      if ($scope.starW1 % 4 != 0) $scope.starW1 += 10;
      $scope.one = $scope.starW1 / 20;
    }

    // 5分半个星
    $scope.starW2 = 100;
    $scope.two = 5;
    $scope.selectStar2 = function ($event) {
      var offset = $($event.target).offset();
      var x = $event.pageX;
      var left = offset.left;
      $scope.starW2 = Math.ceil((x - left) / 10) * 10;
      if ($scope.starW2 % 2 != 0) $scope.starW2 += 10;
      $scope.two = $scope.starW2 / 20;
    }

    // 可滑动5个星10分制
    $scope.starW3 = 100;
    $scope.three = 10.0;
    $scope.selectStar3 = function ($event) {
      var e = $event.targetTouches[0];
      var offset = $($event.target).offset();
      var w = $($event.target).width();
      var x = e.pageX;
      var left = offset.left;
      if (x >= left && x <= w + left) {
        $scope.starW3 = x - left;
        $scope.three = ($scope.starW3 / 10).toFixed(1);
      }
    }

    // 可滑动5个星5分制
    $scope.starW4 = 100;
    $scope.four = 5.0;
    $scope.selectStar4 = function ($event) {
      var e = $event.targetTouches[0];
      var offset = $($event.target).offset();
      var w = $($event.target).width();
      var x = e.pageX;
      var left = offset.left;
      if (x >= left && x <= w + left) {
        $scope.starW4 = x - left;
        $scope.four = ($scope.starW4 / 20).toFixed(1);
      }
    }
  })

  .controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.settings = {
      enableFriends: true
    };
  });
