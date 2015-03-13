setTimeout(function() {
  // UNIVERSITY NAVIGATION
  $('#wordmarkLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Wordmark');
  });

  $('.aboutLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'About');
  });
  $('.meetUwoLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'About / Meet UW Oshkosh');
  });

  $('.academicsLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Academics');
  });

  $('.athleticsLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Athletics');
  });

  $('.alumniLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Alumni');
  });

  $('.admissionsLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Admissions');
  });

  $('.administrationLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Administration');
  });

  $('.resourcesLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Resources');
  });

  $('.calendarsLink').on('click', function() {
    ga('send', 'event', 'University Navigation', 'click', 'Calendars');
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
  $('.quicklinksSafety').on('click', function() {
    ga('send', 'event', 'Quicklinks', 'click', 'Safety');
  });
  $('.quicklinksLeadershipCouncil').on('click', function() {
    ga('send', 'event', 'Quicklinks', 'click', 'Leadership Council');
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

  $('#research-news').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Research News');
  });

  $('#powering-community').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Powering Community');
  });

  $('#on-campus').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'On Campus');
  });

  $('#study-uwo').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Study at UW Oshkosh');
  });

  $('#i-am-a-titan').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'I Am A Titan');
  });

  $('#chancellor').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'From the Chancellor');
  });

  $('#meet-uwo').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Meet UW Oshkosh');
  });

  $('#faculty-five').on('click', function() {
    ga('send', 'event', 'Home Page Cards', 'click', 'Faculty Five');
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

  // CALL TO ACTIONS
  $('#cta--visitCampus-homepage').on('click', function() {
    ga('send', 'event', 'Call to Actions', 'click', 'Visit Campus - Homepage');
  });
  
  $('#cta--visitCampus-studypage').on('click', function() {
    ga('send', 'event', 'Call to Actions', 'click', 'Visit Campus - Study at UW Oshkosh');
  });

  $('#cta--virtualTour-homepage').on('click', function() {
    ga('send', 'event', 'Call to Actions', 'click', 'Virtual Tour - Homepage');
  });

  $('#cta--applyNow-homepage').on('click', function() {
    ga('send', 'event', 'Call to Actions', 'click', 'Apply Now - Homepage');
  });

  $('#cta--requestMoreInformation-studypage').on('click', function() {
    ga('send', 'event', 'Call to Actions', 'click', 'Request More Information - Study at UW Oshkosh');
  });
  // END CALL TO ACTIONS
}, 3010);
