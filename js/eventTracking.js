setTimeout(function() {
  // UNIVERSITY NAVIGATION
  $('#wordmarkLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Wordmark');
  });

  $('#aboutToggle').on('mouseenter', function() {
    ga('send', 'event', 'University Navigation', 'hover', 'About');
  });
  $('.aboutLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'About');
  });
  $('.meetUwoLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'About / Meet UW Oshkosh');
  });
  $('#forecast_embed').on('mouseenter', function() {
    ga('send', 'event', 'University Navigation', 'hover', 'About / Weather');
  });

  $('#academicsToggle').on('mouseenter', function() {
    ga('send', 'event', 'University Navigation', 'hover', 'Academics');
  });
  $('.academicsLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Academics');
  });

  $('#athleticsToggle').on('mouseenter', function() {
    ga('send', 'event', 'University Navigation', 'hover', 'Athletics');
  });
  $('.athleticsLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Athletics');
  });

  $('#alumniToggle').on('mouseenter', function() {
    ga('send', 'event', 'University Navigation', 'hover', 'Alumni');
  });
  $('.alumniLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Alumni');
  });

  $('#admissionsToggle').on('mouseenter', function() {
    ga('send', 'event', 'University Navigation', 'hover', 'Admissions');
  });
  $('.admissionsLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Admissions');
  });

  $('#administrationToggle').on('mouseenter', function() {
    ga('send', 'event', 'University Navigation', 'hover', 'Administration');
  });
  $('.administrationLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Administration');
  });

  $('#resourcesToggle').on('mouseenter', function() {
    ga('send', 'event', 'University Navigation', 'hover', 'Resources');
  });
  $('.resourcesLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Resources');
  });

  $('#calendarsToggle').on('mouseenter', function() {
    ga('send', 'event', 'University Navigation', 'hover', 'Calendars');
  });
  $('.calendarsLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Calendars');
  });

  $('#titanServicesToggle').on('mouseenter', function() {
    ga('send', 'event', 'University Navigation', 'hover', 'Titan Services');
  });
  $('.titanServicesLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services');
  });
  $('.tsSiteIndex').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / Site Index');
  });
  $('.tsDirectory').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / Directory');
  });
  $('.tsTitanWeb').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / Titan Web');
  });
  $('.tsTitanApps').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / Titan Apps');
  });
  $('.tsTitanFiles').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / Titan Files');
  });
  $('.tsMyUwSystem').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / My UW System');
  });
  $('.tsD2L').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / D2L');
  });
  $('.tsLibrary').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / Polk Library');
  });
  $('.tsMyUwo').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / MyUWO');
  });
  $('.tsStudentClubs').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / Student Clubs & Orgs');
  });
  $('.tsTitanJobs').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Titan Services / Titan Jobs');
  });
  // END UNIVERSITY NAVIGATION

  // AUDIENCE NAVIGATION
  $('.audienceFutureStudents').on('click', function() {
    ga('send', 'event', 'Audience Navigation', 'click', 'Future Students');
  });
  $('.audienceParents').on('click', function() {
    ga('send', 'event', 'Audience Navigation', 'click', 'Parents, Family and Friends');
  });
  $('.audienceFaculty').on('click', function() {
    ga('send', 'event', 'Audience Navigation', 'click', 'Faculty and Staff');
  });
  $('.audienceCurrentStudents').on('click', function() {
    ga('send', 'event', 'Audience Navigation', 'click', 'Current Students');
  });
  $('.audienceCommunity').on('click', function() {
    ga('send', 'event', 'Audience Navigation', 'click', 'Community and Visitors');
  });
  // END AUDIENCE NAVIGATION

  // QUICKLINKS
  $('.quicklinksEmail').on('click', function() {
    ga('send', 'event', 'Quicklinks', 'click', 'Email');
  });
  $('.quicklinksLibrary').on('click', function() {
    ga('send', 'event', 'Quicklinks', 'click', 'Polk Library');
  });
  $('.quicklinksDirectory').on('click', function() {
    ga('send', 'event', 'Quicklinks', 'click', 'Directory');
  });
  $('.quicklinksD2L').on('click', function() {
    ga('send', 'event', 'Quicklinks', 'click', 'D2L');
  });
  $('.quicklinksMyUwSystem').on('click', function() {
    ga('send', 'event', 'Quicklinks', 'click', 'My UW System');
  });
  // END QUICKLINKS

  // PILLAR STORIES
  $('.pillarEducationMore').on('click', function() {
    ga('send', 'event', 'Pillar Stories', 'click', 'Education');
  });
  $('.pillarLeadershipMore').on('click', function() {
    ga('send', 'event', 'Pillar Stories', 'click', 'Leadership');
  });
  $('.pillarResponsivenessMore').on('click', function() {
    ga('send', 'event', 'Pillar Stories', 'click', 'Responsiveness');
  });
  $('.pillarServiceMore').on('click', function() {
    ga('send', 'event', 'Pillar Stories', 'click', 'Service');
  });
  $('.pillarSustainabilityMore').on('click', function() {
    ga('send', 'event', 'Pillar Stories', 'click', 'Sustainability');
  });
  // END PILLAR STORIES

  // EVENTS
  $('.viewMoreEvents').on('click', function() {
    ga('send', 'event', 'Events', 'click', 'View More Events');
  });
  $('.viewEvent').on('click', function() {
    ga('send', 'event', 'Events', 'click', 'Individual Event');
  });
  // END EVENTS

  // HOME PAGE CARDS
  $('#campus-news').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Campus News');
  });
  $('#campus-news').on('mouseenter', function() {
    ga('send', 'event', 'Home Page Cards', 'hover', 'Campus News');
  });

  $('#research-news').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Research News');
  });
  $('#research-news').on('mouseenter', function() {
    ga('send', 'event', 'Home Page Cards', 'hover', 'Research News');
  });

  $('#powering-community').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Powering Community');
  });
  $('#powering-community').on('mouseenter', function() {
    ga('send', 'event', 'Home Page Cards', 'hover', 'Powering Community');
  });

  $('#on-campus').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'On Campus');
  });
  $('#on-campus').on('mouseenter', function() {
    ga('send', 'event', 'Home Page Cards', 'hover', 'On Campus');
  });

  $('#study-uwo').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Study at UW Oshkosh');
  });
  $('#study-uwo').on('mouseenter', function() {
    ga('send', 'event', 'Home Page Cards', 'hover', 'Study at UW Oshkosh');
  });

  $('#i-am-a-titan').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'I Am A Titan');
  });
  $('#i-am-a-titan').on('mouseenter', function() {
    ga('send', 'event', 'Home Page Cards', 'hover', 'I Am A Titan');
  });

  $('#chancellor').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'From the Chancellor');
  });
  $('#chancellor').on('mouseenter', function() {
    ga('send', 'event', 'Home Page Cards', 'hover', 'From the Chancellor');
  });

  $('#meet-uwo').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Meet UW Oshkosh');
  });
  $('#meet-uwo').on('mouseenter', function() {
    ga('send', 'event', 'Home Page Cards', 'hover', 'Meet UW Oshkosh');
  });

  $('#faculty-five').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Faculty Five');
  });
  $('#faculty-five').on('mouseenter', function() {
    ga('send', 'event', 'Home Page Cards', 'hover', 'Faculty Five');
  });
  // END HOME PAGE CARDS

  // FOOTER
  $('.footerMap').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Wisconsin Map');
  });
  $('.footerPhone').on('click', function() {
    ga('send', 'event', 'Footer', 'call', 'Phone Number');
  });
  $('.footerAccessibility').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Accessibility');
  });
  $('.footerCareer').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Career Services');
  });
  $('.footerDirections').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Get Directions');
  });
  $('.footerGive').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Give to UW Oshkosh');
  });
  $('.footerUSP').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'University Studies Program');
  });
  $('.footerMedia').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Media Relations');
  });
  $('.footerWork').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Work at UW Oshkosh');
  });
  $('.footerMobile').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Download Mobile App');
  });
  $('.footerEmergency').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Emergency and Safety Information');
  });
  $('.footerFacebook').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Facebook');
  });
  $('.footerTwitter').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Twitter');
  });
  $('.footerInstagram').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Instagram');
  });
  $('.footerYouTube').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'YouTube');
  });
  $('.footerLinkedIn').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'LinkedIn');
  });
  $('.footerPinterest').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Pinterest');
  });
  $('.footerFlickr').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Flickr');
  });
  $('.footerCollegePortrait').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'College Portrait');
  });
  $('.footerHLC').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'Higher Learning Commission');
  });
  $('.footerUwSystem').on('click', function() {
    ga('send', 'event', 'Footer', 'click', 'University of Wisconsin System');
  });
  // END FOOTER
}, 3010);
