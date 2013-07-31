(function() {
  'use strict';

  function init() {
    var bespokeTwitter = bespoke.horizontal.from('#deck-twitter', {
        loop: true
    });
    var bespokeFacebook = bespoke.horizontal.from('#deck-facebook', {
        loop: true
    });
    var bespokeYoutube = bespoke.horizontal.from('#deck-youtube', {
        loop: true
    });
    var bespokeFlickr = bespoke.horizontal.from('#deck-flickr', {
        loop: true
    });
  }



  init();

}());
