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
$('.tsTitanAdmin').on('click', function() {
  ga('send', 'event', 'University Navigation', 'click', 'Titan Services / Titan Admin');
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

// HOME PAGE CARDS
$('#campusNewsPanel').on('mouseenter', function() {
  ga('send', 'event', 'Home Page Cards', 'hover', 'Campus News');
});
$('#campusNewsFullStory').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'click', 'Campus News');
});

$('#researchNewsPanel').on('mouseenter', function() {
  ga('send', 'event', 'Home Page Cards', 'hover', 'Research News');
});
$('#researchNewsFullStory').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'click', 'Research News');
});

$('#poweringCommunityPanel').on('mouseenter', function() {
  ga('send', 'event', 'Home Page Cards', 'hover', 'Powering Community');
});
$('#poweringCommunityFullStory').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'click', 'Powering Community');
});

$('#uwotwPanel').on('mouseenter', function() {
  ga('send', 'event', 'Home Page Cards', 'hover', 'UW Oshkosh This Week');
});
$('#uwotwFullStory').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'click', 'UW Oshkosh This Week');
});
$('#uwotwVideo').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'play', 'UW Oshkosh This Week');
});

$('#studyAtUwoPanel').on('mouseenter', function() {
  ga('send', 'event', 'Home Page Cards', 'hover', 'Study at UW Oshkosh');
});
$('#studyAtUwoFullStory').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'click', 'Study at UW Oshkosh');
});

$('#iAmATitanPanel').on('mouseenter', function() {
  ga('send', 'event', 'Home Page Cards', 'hover', 'I Am A Titan');
});
$('#iAmATitanFullStory').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'click', 'I Am A Titan');
});

$('#fromTheChancellorPanel').on('mouseenter', function() {
  ga('send', 'event', 'Home Page Cards', 'hover', 'From the Chancellor');
});
$('#fromTheChancellorFullStory').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'click', 'From the Chancellor');
});

$('#meetUwOshkoshPanel').on('mouseenter', function() {
  ga('send', 'event', 'Home Page Cards', 'hover', 'Meet UW Oshkosh');
});
$('#meetUwOshkoshFullStory').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'click', 'Meet UW Oshkosh');
});

$('#facultyFivePanel').on('mouseenter', function() {
  ga('send', 'event', 'Home Page Cards', 'hover', 'Faculty Five');
});
$('#facultyFiveFullStory').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'click', 'Faculty Five');
});
$('#facultyFiveVideo').on('click', function() {
  ga('send', 'event', 'Home Page Cards', 'play', 'Faculty Five');
});
// END HOME PAGE CARDS

// FOOTER
$('.footerMap').on('click', function() {
  ga('send', 'event', 'Footer', 'click', 'Wisconsin Map');
});
// END FOOTER
