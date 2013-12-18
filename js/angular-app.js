'use strict';

angular.module('eosApp', ['ngSanitize']);

angular.module('eosApp')
  .factory('feedService', ['$http', function ($http) {
    var doRequest = function() {
      return $http({
        method: 'GET',
        url: 'http://feeds.uwosh.edu/api/v1/index.php/combined',
        cache: true
      });
    };
    return {
      events: function() { return doRequest(); },
    };
  }]);

// CONTROLLERS
angular.module('eosApp')
  .controller('EventsCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.events = data.events.value.items;
    }).error(function() {
      // Some error occurred
    });
  })
  .controller('CampusNewsPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.campusNews.posts[0];
      $scope.post.category = data.campusNews.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.campusNews.category.slug;
      $scope.slug = data.campusNews.category.slug;
      var presubstr = data.campusNews.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  })
  .controller('ResearchNewsPanelCtrl', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.researchNews.posts[0];
      $scope.post.category = data.researchNews.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.researchNews.category.slug;
      $scope.slug = data.researchNews.category.slug;
      var presubstr = data.researchNews.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
    }).error(function() {
      // Some error occurred
    });
  });

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
      return moment(new Date(dateString)).fromNow();
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
  });
