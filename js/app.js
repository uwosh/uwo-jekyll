// Foundation JavaScript
$(document).foundation();

// Reflow Equalizer after content is loaded
setTimeout(function() {
  $(document).foundation('equalizer','reflow');
}, 4001);

// Reflow Equalizer after content is loaded
setTimeout(function() {
  $(document).foundation('equalizer','reflow');
}, 11001);

// Declare social slider vars
var twitterDeck, facebookDeck, youtubeDeck;

// jQuery Port
$( document ).ready(function() {

  $('#main').css('opacity', '0').fadeTo(1000, 1,'swing');

  if ($('html').hasClass('page--home')) {

    fetchUwoApi();

    fetchEmergency();

  };

});

function postExcerpt(rawString, chars) {
  chars = chars || 170;
  var presubstr = rawString;
  var strippedstr = presubstr.replace(/(<([^>]+)>)/ig,'');
  var truncstring = $.trim(strippedstr).substring(0,chars).split(" ").slice(0, -1).join(" ") + "...";
  return truncstring;
};

function pillarLoad(post, pillarClass) {
  var title = post.title || 'Story Title';
  var excerpt = postExcerpt(post.excerpt, 60) || 'Story excerpt';
  //var excerpt = $.truncate(post.excerpt, { length: 60 });
  var image = post.custom_fields.pillar_image || 'http://placehold.it/1136x420';
  var url = post.url || '#';

  var sliderHtml = '
    <div>
      <a href="' + url + '" class="pillar-education-url"><img class="pillar-image img-responsive pillar-education-image" src="' + image + '" alt="" /></a>
      <div class="home-slider__caption">
        <div class="home-slider__caption__content">
          <p class="banner-headline home-slider__caption__title pillar-education-title">' + title + '</p>
          <p class="body-content"><span class="home-slider__caption__excerpt pillar-education-excerpt">' + excerpt + '</span><a href="' + url + '" class="pillarEducationMore pillar-education-url"><span class="home-slider__caption__read-more">Read more &hellip;</span></a></p>
        </div>
      </div>
    </div>
  ';

  $('#pillar-slick').append(sliderHtml);

};

function eventsLoad(events) {
  var eventHtml = '';

  $.each(events, function(index, event) {
    var eventMonth = moment(new Date(event['ev:tribe_event_meta']['ev:startdate'])).format('MMM') || 'JAN';
    var eventDay = moment(new Date(event['ev:tribe_event_meta']['ev:startdate'])).format('D') || '00';
    var startTime = moment(new Date(event['ev:tribe_event_meta']['ev:startdate'])).format('h a') || '12 am';
    var endTime = moment(new Date(event['ev:tribe_event_meta']['ev:enddate'])).format('h a') || '12 pm';
    var description = $.trim(event.description).substring(0,130).split(" ").slice(0, -1).join(" ") + "..." || 'Event description';
    var link = event.link || '#';
    var title = event.title || 'Event Title';

    eventHtml = eventHtml + '
      <div class="large-8 medium-8 small-24 columns">
        <div class="media">
          <a class="media__img viewEvent" href="' + link + '">
            <div class="event-item__calendar">
              <div class="event-item__calendar--month">' + eventMonth + '.</div>
              <div class="event-item__calendar--day">' + eventDay + '</div>
            </div>
          </a>
          <div class="media__body">
            <a class="viewEvent" href="' + link + '"><h4 class="event-item__title body-content">' + title + '</h4></a>
            <div class="event-item__time body-content">' + startTime + '&ndash;' +  endTime + '</div>
            <div class="event-item__location body-content">' + description + '</div>
          </div>
        </div>
      </div>
    ';
  });

  $('#event-list').html(eventHtml);
};

function panelLoad(post, panelClass, panelTitle, panelUrl) {
  var title = post.title || 'Story Title';
  var excerpt = $.truncate(post.excerpt, { length: 170 }) || 'Story excerpt';
  try {
    var image = post.thumbnail_images.medium.url || 'http://placehold.it/334x189';
  }
  catch(e) {

  }
  var url = post.url || '#';

  //var excerpt = postExcerpt(post.excerpt);
  //var rawdate = moment(new Date(post.date)).format();
  //var date = moment(rawdate).fromNow();

  var postHtml = '
    <div class="large-8 medium-8 small-24 columns">
      <div id="studyAtUwoPanel" class="panel panel--home panel--green">
        <div class="panel__category uppercase"><a href="' + panelUrl + '" class="studyAtUwoCategory">' + panelTitle + ' <i class="fa fa-arrow-right"></i></a></div>
        <div class="panel__equalizer" data-equalizer-watch>
  ';


  if (post.custom_fields.youtube_id) {
    postHtml = postHtml + '
      <div id="studyAtUwOshkoshVideo" class="panel__video-wrapper">
        <div class="youtube" id="' + post.custom_fields.youtube_id[0] + '" style="height:189px;"></div>
      </div><br>
    ';
  } else {
    postHtml = postHtml + '
      <a href="' + url + '" class="studyAtUwoFullStory ' + panelClass + '-url">
        <div class="panel__video-wrapper">
          <img src="' + image + '" class="panel__image--home ' + panelClass + '-image" alt="' + title + '" />
        </div><br>
      </a>
    ';
  };

  postHtml = postHtml + '
          <a href="' + url +'" class="studyAtUwoFullStory study-uwo-url"><h2 class="panel__news-heading study-uwo-title">' + title + '</h2></a>
          <div class="panel__excerpt body-content">
            <span class="study-uwo-excerpt">' + excerpt + '</span>
          </div>
        </div>
      </div>
    </div>
  ';

  $('#' + panelClass).html(postHtml);
};

function tweetsLoad(tweets) {
  var tweetHtml = '';

  $.each(tweets, function(index, tweet) {
    var rawdate = moment(new Date(tweet.created_at)).format() || 'Some Day';
    var tweetDate = moment(rawdate).fromNow() || 'Some Day';
    var screen_name = tweet.user.screen_name || '@uwoshkosh';
    var profile_image_url = tweet.user.profile_image_url_https || 'twitter.png';
    var name = tweet.user.name || 'UW Oshkosh';
    var id_str = tweet.id_str || '1234';
    var text = tweet.text || 'Tweet';


    tweetHtml = tweetHtml + '
      <slide>
        <div class="twitter-article social-article">
          <div class="media">
            <a class="media__img" href="https://twitter.com/' + screen_name + '" target="_blank"><img class="media-object twitter-article__avatar" src="' +  profile_image_url + '" alt="UW Oshkosh Twitter profile image"></a>
            <div class="media__body">
              <div class="media-heading">
                <span class="tweetprofilelink">
                  <strong>' + name + '</strong> <a href="https://twitter.com/' +  screen_name + '" target="_blank">@' + screen_name + '</a>
                </span><br>
                <span class="tweet-time">
                  <a href="https://twitter.com/' + screen_name + '/status/' + id_str + '" target="_blank"><i class="fa fa-clock-o datetime"></i> <time class="datetime" datetime="' + rawdate + '">' + tweetDate + '</time></a>
                </span>
              </div>
              <p>' + text + '</p>
              <p class="twitter-intents">
                <a href="https://twitter.com/intent/tweet?in_reply_to=' + id_str + '" target="_blank"><i class="fa fa-fw fa-reply"></i> Reply &nbsp;</a>
                <a href="https://twitter.com/intent/retweet?tweet_id=' + id_str + '" target="_blank"><i class="fa fa-fw fa-retweet"></i> Retweet &nbsp;</a>
                <a href="https://twitter.com/intent/favorite?tweet_id=' + id_str + '" target="_blank"><i class="fa fa-fw fa-star"></i> Favorite</a></p>
            </div>
          </div>
        </div>
      </slide>
    ';
  });
  $('#deck-twitter').html(tweetHtml);
};

function facebookLoad(fbposts) {
  var facebookHtml = '';

  $.each(fbposts, function(index, fbpost) {
    if (fbpost.message) {
      var rawdate = moment(new Date(fbpost.created_time)).format() || 'Some day';
      var fbpostDate = moment(rawdate).fromNow() || 'Some day';
      var link = fbpost.link || '#';
      var message = fbpost.message || 'Post excerpt';
      var likes = fbpost.likes.data.length || '10';

      facebookHtml = facebookHtml + '
        <slide>
          <div class="twitter-article facebook-article social-article">
            <div class="media">
              <a class="media__img" href="https://www.facebook.com/uwoshkosh">
                <img src="http://www.uwosh.edu/img/facebook-wordmark.jpg" alt="UW Oshkosh wordmark">
              </a>
              <div class="media__body">
                <strong>UW Oshkosh</strong>
              </div>
            </div>
            <p>
              <!-- <img ng-src="{{ fbpost.picture }}" class="right" alt=""> --><span>' + message + '</span>&hellip; <a href="' + link + '" target="_blank" alt="" >Read more</a>
            </p>
            <div>
              <span class="social-feed-date posted-date uppercase datetime"><i class="fa fa-clock-o"></i> <time class="datetime" datetime="' + rawdate + '">' + fbpostDate + '</time></span><span class="datetime social-feed-likes">' + likes + ' people like this</span>
            </div>
          </div>
        </slide>
      ';
    };
  });
  $('#deck-facebook').html(facebookHtml);
};

function youtubeLoad(videos) {
  var youtubeHtml = '';

  $.each(videos, function(index, video) {
    var rawdate = moment(new Date(video.updated)).format() || 'Some day';
    var videoDate = moment(rawdate).fromNow() || 'Some day';
    var id = video.id || '1234';
    var title = video.title || 'Video Title';

    youtubeHtml = youtubeHtml + '
      <slide>
        <div class="twitter-article social-article">
          <div class="youtube" id="' + id + '" style="height:160px;"></div>
          <p class="body-content">' + title + '</p>
          <span class="social-feed-date posted-date uppercase datetime"><i class="fa fa-clock-o"></i> <time class="datetime" datetime="' + rawdate + '">' + videoDate + '</time></span>
        </div>
      </slide>
    ';
  });
  $('#deck-youtube').html(youtubeHtml);
};

function emergencyLoad(posts) {
  var postHtml = '';

  $.each(posts, function(index, post) {
    if (post.title) {
      var postDate = moment(new Date(post.modified)).format('MMM D h:m a');

      postHtml = postHtml + '
        <div data-alert class="alert-box small-24 columns">
          <span class="drop-down-nav">' + post.title + '</span>&hellip; <a href="' + post.url + '" style="color:#fff;text-decoration:underline;font-size:16px;line-height:24px;">Read more</a><br>
          <span class="datetime" style="color:#fff;"><i class="fa fa-clock-o"></i> <time datetime="' + post.date + '"> ' + postDate + '</time></span>
        </div>
      ';
    };
  });
  $('#emergency-alert').html(postHtml);
  $('.fade--emergency').addClass("in");
};

// YouTube Thumbnail and Video Replacement
function youtube_thumb() {
  var i, c, y, v, s, n;
  v = document.getElementsByClassName("youtube");
  for (n = 0; n < v.length; n++) {
      y = v[n];
      i = document.createElement("img");
      i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
      i.setAttribute("class", "thumb");
      i.setAttribute("alt", "");
      c = document.createElement("div");
      c.setAttribute("class", "play");
      y.appendChild(i);
      y.appendChild(c);
      y.onclick = function () {
          var a = document.createElement("iframe");
          a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
          a.style.width = this.style.width;
          a.style.height = this.style.height;
          this.parentNode.replaceChild(a, this)
      }
  };
};

function fetchUwoApi() {
  $.ajax({
    type: 'GET',
    url: "http://feeds2.uwosh.edu/api/v2/index.php/uwo-api",
    dataType: 'json',
    success: function( data )
    {
      var pillars = {
        leadership: {
          feedEntry: data.pillarLeadership.posts[0],
          pillarClass: 'pillar-leadership'
        },
        sustainability: {
          feedEntry: data.pillarSustainability.posts[0],
          pillarClass: 'pillar-sustainability'
        },
        education: {
          feedEntry: data.pillarEducation.posts[0],
          pillarClass: 'pillar-education'
        },
        service: {
          feedEntry: data.pillarService.posts[0],
          pillarClass: 'pillar-service'
        },
        responsiveness: {
          feedEntry: data.pillarResponsiveness.posts[0],
          pillarClass: 'pillar-responsiveness'
        }
      };

      var panels = {
        campusNews: {
          feedEntry: data.campusNews.posts[0],
          panelClass: 'campus-news',
          panelTitle: 'Campus News',
          panelUrl: 'http://www.uwosh.edu/today/campus-news/'
        },
        researchNews: {
          feedEntry: data.researchNews.posts[0],
          panelClass: 'research-news',
          panelTitle: 'Research News',
          panelUrl: 'http://www.uwosh.edu/today/research/'
        },
        poweringCommunity: {
          feedEntry: data.poweringCommunity.posts[0],
          panelClass: 'powering-community',
          panelTitle: 'Powering Community',
          panelUrl: 'http://www.uwosh.edu/today/knowledge-powers-community'
        },
        // uwotw: {
        //   feedEntry: data.uwotw.posts[0],
        //   panelClass: 'on-campus',
        //   panelTitle: 'UW&nbsp;Oshkosh This Week',
        //   panelUrl: 'http://www.uwosh.edu/today/category/uwotw/'
        // },
        onCampus: {
          feedEntry: data.onCampus.posts[0],
          panelClass: 'on-campus',
          panelTitle: 'On Campus',
          panelUrl: 'http://www.uwosh.edu/today/category/on-campus-home/'
        },
        studyUwo: {
          feedEntry: data.admissions.posts[0],
          panelClass: 'study-uwo',
          panelTitle: 'Study at UW&nbsp;Oshkosh',
          panelUrl: 'http://www.uwosh.edu/today/category/admissions-2/'
        },
        iAmATitan: {
          feedEntry: data.iAmATitan.posts[0],
          panelClass: 'i-am-a-titan',
          panelTitle: 'I am a Titan',
          panelUrl: 'http://www.uwosh.edu/faces/category/i-am-a-titan/'
        },
        chancellor: {
          feedEntry: data.chancellor.posts[0],
          panelClass: 'chancellor',
          panelTitle: 'From the Chancellor',
          panelUrl: 'http://www.uwosh.edu/today/category/chancellor'
        },
        meetUwo: {
          feedEntry: data.meetUwo.posts[0],
          panelClass: 'meet-uwo',
          panelTitle: 'Meet UW&nbsp;Oshkosh',
          panelUrl: 'http://www.uwosh.edu/faces'
        },
        facultyFive: {
          feedEntry: data.twif.posts[0],
          panelClass: 'faculty-five',
          panelTitle: 'Faculty Five',
          panelUrl: 'http://www.uwosh.edu/today/faculty-five/'
        }
      };

      $.each(pillars, function(index, pillar) {
        try {
          pillarLoad(pillar.feedEntry, pillar.pillarClass);
        }
        catch(e) {

        }
      });

      $.each(panels, function(index, panel) {
        try {
          panelLoad(panel.feedEntry, panel.panelClass, panel.panelTitle, panel.panelUrl);
        }
        catch(e) {
          console.log(e);
        }
      });


      try {
        eventsLoad(data.events.value.items);
      }
      catch(e) {

      }

      if (screen.width > 1023) {

        try {
          tweetsLoad(data.twitter);
          twitterDeck = bespoke.horizontal.from('#deck-twitter', {
              loop: true
          });
        }
        catch(e) {

        }

        try {
          facebookLoad(data.facebook.data);
          facebookDeck = bespoke.horizontal.from('#deck-facebook', {
              loop: true
          });
        }
        catch(e) {

        }

        try {
          youtubeLoad(data.youtube.data.items);
          youtubeDeck = bespoke.horizontal.from('#deck-youtube', {
              loop: true
          });
        }
        catch(e) {

        }

        try {
          //flickrLoad(data.flickr.photosets.photoset);
          // bespoke.horizontal.from('#deck-flickr', {
          //     loop: true
          // });
        }
        catch(e) {

        }

      };

      try {
        youtube_thumb();
      }
      catch(e) {

      }

      $('#pillar-slick').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        dots: true
      });
    }
  });
};

function fetchEmergency() {
  $.ajax({
    url: "http://feeds2.uwosh.edu/api/v2/index.php/emergency/broadcast",
    dataType: 'json',
    success: function( data )
    {
      emergencyLoad(data.posts);
    }
  });
};
