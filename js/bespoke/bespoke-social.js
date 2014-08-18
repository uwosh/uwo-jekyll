(function() {
  'use strict';

  function init() {
    bespoke.horizontal.from('#deck-twitter', {
        loop: true
    });
    bespoke.horizontal.from('#deck-facebook', {
        loop: true
    });
    bespoke.horizontal.from('#deck-youtube', {
        loop: true
    });
    // bespoke.horizontal.from('#deck-flickr', {
    //     loop: true
    // });
  }


  setTimeout(function() {init();}, 3000);

}());
