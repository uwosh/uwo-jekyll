$(function() {
  if (screen.width > 767) {
    var allDrawers = $('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer,#educationDrawer,#leadershipDrawer,#responsivenessDrawer,#serviceDrawer,#sustainabilityDrawer');

    // About
    $('#aboutToggle').hover(function() {
      $('#aboutDrawer').fadeIn(200);$('#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#aboutDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Academics
    $('#academicsToggle').hover(function() {
      $('#academicsDrawer').fadeIn(200);$('#aboutDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#academicsDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Athletics
    $('#athleticsToggle').hover(function() {
      $('#athleticsDrawer').fadeIn(200);$('#aboutDrawer,#academicsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#athleticsDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Alumni
    $('#alumniToggle').hover(function() {
      $('#alumniDrawer').fadeIn(200);$('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#alumniDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Admissions
    $('#admissionsToggle').hover(function() {
      $('#admissionsDrawer').fadeIn(200);$('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#admissionsDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Administration
    $('#administrationToggle').hover(function() {
      $('#administrationDrawer').fadeIn(200);$('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#administrationDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Resources
    $('#resourcesToggle').hover(function() {
      $('#resourcesDrawer').fadeIn(200);$('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#calendarsDrawer').fadeOut(450);
      $('#resourcesDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Calendars
    $('#calendarsToggle').hover(function() {
      $('#calendarsDrawer').fadeIn(200);$('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer').fadeOut(450);
      $('#calendarsDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Education
    $('#educationToggle').hover(function() {
      $('#educationDrawer').fadeIn(200);$('#leadershipDrawer,#responsivenessDrawer,#serviceDrawer,#sustainabilityDrawer').fadeOut(450);
      $('#educationDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Leadership
    $('#leadershipToggle').hover(function() {
      $('#leadershipDrawer').fadeIn(200);$('#educationDrawer,#responsivenessDrawer,#serviceDrawer,#sustainabilityDrawer').fadeOut(450);
      $('#leadershipDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Responsiveness
    $('#responsivenessToggle').hover(function() {
      $('#responsivenessDrawer').fadeIn(200);$('#leadershipDrawer,#educationDrawer,#serviceDrawer,#sustainabilityDrawer').fadeOut(450);
      $('#responsivenessDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Service
    $('#serviceToggle').hover(function() {
      $('#serviceDrawer').fadeIn(200);$('#leadershipDrawer,#responsivenessDrawer,#educationDrawer,#sustainabilityDrawer').fadeOut(450);
      $('#serviceDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Sustainability
    $('#sustainabilityToggle').hover(function() {
      $('#sustainabilityDrawer').fadeIn(200);$('#leadershipDrawer,#responsivenessDrawer,#serviceDrawer,#educationDrawer').fadeOut(450);
      $('#sustainabilityDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });
  }
});
