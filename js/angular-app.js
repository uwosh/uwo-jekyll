'use strict';

angular.module('eosApp', ['ngSanitize']);

angular.module('eosApp')
  .factory('feedService', ['$http', function ($http) {
    var doRequest = function() {
      return $http({
        method: 'GET',
        url: 'http://feeds.uwosh.edu/api/v1/index.php/uwo-api',
        cache: true
      });
    };
    return {
      events: function() { return doRequest(); },
    };
  }]);

// CONTROLLERS
angular.module('eosApp')
  .controller('EventsCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.events = data.events.value.items;
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('WeatherCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.weather = data.weather;
      var icon = data.weather.currently.icon;
      var skycons = new Skycons({'color': '#444'});
      switch(icon) {
        case 'clear-day':
          skycons.add('weather1', Skycons.CLEAR_DAY);
          break;
        case 'clear-night':
          skycons.add('weather1', Skycons.CLEAR_NIGHT);
          break;
        case 'partly-cloudy-day':
          skycons.add('weather1', Skycons.PARTLY_CLOUDY_DAY);
          break;
        case 'partly-cloudy-night':
          skycons.add('weather1', Skycons.PARTLY_CLOUDY_NIGHT);
          break;
        case 'cloudy':
          skycons.add('weather1', Skycons.CLOUDY);
          break;
        case 'rain':
          skycons.add('weather1', Skycons.RAIN);
          break;
        case 'sleet':
          skycons.add('weather1', Skycons.SLEET);
          break;
        case 'snow':
          skycons.add('weather1', Skycons.SNOW);
          break;
        case 'wind':
          skycons.add('weather1', Skycons.WIND);
          break;
        case 'fog':
          skycons.add('weather1', Skycons.FOG);
          break;
        default:
          skycons.add('weather1', Skycons.CLEAR_DAY);
      }
      skycons.play();
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('CampusNewsPanelCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.campusNews.posts[0];
      $scope.post.category = data.campusNews.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.campusNews.category.slug;
      $scope.slug = data.campusNews.category.slug;
      var presubstr = data.campusNews.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
      $scope.events = data.events.value.items;
      $scope.posts = data.campusNews.posts;
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('ResearchNewsPanelCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.researchNews.posts[0];
      $scope.post.category = data.researchNews.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.researchNews.category.slug;
      $scope.slug = data.researchNews.category.slug;
      var presubstr = data.researchNews.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
      $scope.events = data.events.value.items;
      $scope.posts = data.researchNews.posts;
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('PoweringCommunityPanelCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.poweringCommunity.posts[0];
      $scope.post.category = data.poweringCommunity.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.poweringCommunity.category.slug;
      $scope.slug = data.poweringCommunity.category.slug;
      var presubstr = data.poweringCommunity.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
      $scope.events = data.events.value.items;
      $scope.posts = data.poweringCommunity.posts;
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('UwotwPanelCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.uwotw.posts[0];
      $scope.post.category = data.uwotw.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.uwotw.category.slug;
      $scope.slug = data.uwotw.category.slug;
      var presubstr = data.uwotw.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
      $scope.events = data.events.value.items;
      $scope.posts = data.uwotw.posts;
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('AdmissionsPanelCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.admissions.posts[0];
      $scope.post.category = data.admissions.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.admissions.category.slug;
      $scope.slug = data.admissions.category.slug;
      var presubstr = data.admissions.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
      $scope.events = data.events.value.items;
      $scope.posts = data.admissions.posts;
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('TitanPanelCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.iAmATitan.posts[0];
      $scope.post.category = data.iAmATitan.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.iAmATitan.category.slug;
      $scope.slug = data.iAmATitan.category.slug;
      var presubstr = data.iAmATitan.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
      $scope.events = data.events.value.items;
      $scope.posts = data.iAmATitan.posts;
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('ChancellorPanelCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.chancellor.posts[0];
      $scope.post.category = data.chancellor.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.chancellor.category.slug;
      $scope.slug = data.chancellor.category.slug;
      var presubstr = data.chancellor.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
      $scope.events = data.events.value.items;
      $scope.posts = data.chancellor.posts;
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('MeetUwoPanelCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.meetUwo.posts[0];
      $scope.post.category = 'Meet UWO';
      $scope.categoryURL = 'http://www.uwosh.edu/faces';
      $scope.slug = 'meet-uwo';
      var presubstr = data.meetUwo.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
      $scope.events = data.events.value.items;
      $scope.posts = data.meetUwo.posts;
    }).error(function() {
      // Some error occurred
    });
  }])
  .controller('FacultyFivePanelCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.post = data.twif.posts[0];
      $scope.post.category = data.twif.category.title;
      $scope.categoryURL = 'http://www.uwosh.edu/today/' + data.twif.category.slug;
      $scope.slug = data.twif.category.slug;
      var presubstr = data.twif.posts[0].excerpt;
      var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
      $scope.excerpt = strippedstr;
      $scope.events = data.events.value.items;
      $scope.posts = data.twif.posts;
    }).error(function() {
      // Some error occurred
    });
  }])
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
  }])
  .controller('FlickrCtrl', ['$scope', '$http', 'feedService', function ($scope,$http,feedService) {
    feedService.events().success(function(data) {
      $scope.photosets = data.flickr.photosets.photoset;
    }).error(function() {
      // Some error occurred
    });
  }]);

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
