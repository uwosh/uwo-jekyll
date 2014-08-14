'use strict';

angular.module('eosApp', ['ngSanitize']);

angular.module('eosApp')
  .factory('feedService', ['$http', function ($http) {
    var doRequest = function() {
      return $http({
        method: 'GET',
        url: 'http://feeds2.uwosh.edu/api/v2/index.php/uwo-api',
        cache: true
      });
    };
    return {
      events: function() { return doRequest(); },
    };
  }]);

// CONTROLLERS
angular.module('eosApp')
  .controller('EmergencyCtrl', ['$scope', '$http', function ($scope,$http) {
    $http.get('http://feeds2.uwosh.edu/api/v2/index.php/emergency/broadcast').success(function(data) {
      $scope.posts = data.posts;
    }).error(function() {
      // Some error occurred
    });
  }])
  // .controller('TitanAlertCtrl', ['$scope', '$http', function ($scope,$http) {
  //   $http.get('http://feeds.uwosh.edu/api/v1/index.php/titan-alert/rave').success(function(data) {
  //     $scope.posts = data.value.items;
  //   }).error(function() {
  //     // Some error occurred
  //   });
  // }])
  // .controller('EventsCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
  //   feedService.events().success(function(data) {
  //     $scope.events = data.events.value.items;
  //   }).error(function() {
  //     // Some error occurred
  //   });
  // }])
  .controller('TwitterCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.tweets = data.twitter;
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('FacebookCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.fbposts = data.facebook.data;
      $scope.filterEmpties = function(post) {
        if(post.message) {
          return true;
        }
        return false;
      };
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('YouTubeCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.videos = data.youtube.data.items;
    }).error(function() {
      // Some error occurred
    });
  }]);
  // .controller('FlickrCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
  //   feedService.events().success(function(data) {
  //     $scope.photosets = data.flickr.photosets.photoset;
  //   }).error(function() {
  //     // Some error occurred
  //   });
  // }]);

// FILTERS
angular.module('eosApp')
  .filter('characters', function () {
    return function (input, chars, breakOnWord) {
      if (isNaN(chars)) {
        return input;
      }
      if (chars <= 0) {
        return '';
      }
      if (input && input.length >= chars) {
        input = input.substring(0, chars);

        if (!breakOnWord) {
          var lastspace = input.lastIndexOf(' ');
          //get last space
          if (lastspace !== -1) {
            input = input.substr(0, lastspace);
          }
        } else {
          while(input.charAt(input.length-1) === ' '){
            input = input.substr(0, input.length -1);
          }
        }
        return input + '...';
      }
      return input;
    };
  })
  .filter('cleanDate', function () {
    return function(dateString) {
      return moment(new Date(dateString)).format();
    };
  })
  .filter('fromNow', function () {
    return function(dateString) {
      return moment(dateString).fromNow();
    };
  })
  .filter('words', function () {
    return function (input, words) {
      if (isNaN(words)) {
        return input;
      }
      if (words <= 0) {
        return '';
      }
      if (input) {
        var inputWords = input.split(/\s+/);
        if (inputWords.length > words) {
          input = inputWords.slice(0, words).join(' ') + '...';
        }
      }
      return input;
    };
  })
  .filter('tweetLinky',['$filter',
    function($filter) {
      return function(text, target) {
        if (!text) return text;

        var replacedText = $filter('linky')(text, target);
        var targetAttr = "";
        if (angular.isDefined(target)) {
            targetAttr = ' target="' + target + '"';
        }
        // replace #hashtags and send them to twitter
        var replacePattern1 = /(^|\s)#(\w*[a-zA-Z_]+\w*)/gim;
        replacedText = text.replace(replacePattern1, '$1<a href="https://twitter.com/search?q=%23$2"' + targetAttr + '>#$2</a>');
        // replace @mentions but keep them to our site
        var replacePattern2 = /(^|\s)\@(\w*[a-zA-Z_]+\w*)/gim;
        replacedText = replacedText.replace(replacePattern2, '$1<a href="https://twitter.com/$2"' + targetAttr + '>@$2</a>');
        return replacedText;
      };
    }
  ]);
