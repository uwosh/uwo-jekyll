/* ShowHide Plugin
*
* Written by Shawn Hansen (@geekles)
*
*/

$(function() {
  if (screen.width > 767) {
    var allDrawers = $('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer,#opportunityOfPlaceDrawer,#sustainabilityDrawer,#researchDrawer,#educationDrawer,#heartDrawer');

    // About
    $('#aboutToggle').hoverIntent(function() {
      $('#aboutDrawer').fadeIn(200);
      $('#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#aboutDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Academics
    $('#academicsToggle').hoverIntent(function() {
      $('#academicsDrawer').fadeIn(200);
      $('#aboutDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#academicsDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Athletics
    $('#athleticsToggle').hoverIntent(function() {
      $('#athleticsDrawer').fadeIn(200);
      $('#aboutDrawer,#academicsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#athleticsDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Alumni
    $('#alumniToggle').hoverIntent(function() {
      $('#alumniDrawer').fadeIn(200);
      $('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#alumniDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Admissions
    $('#admissionsToggle').hoverIntent(function() {
      $('#admissionsDrawer').fadeIn(200);
      $('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#admissionsDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Administration
    $('#administrationToggle').hoverIntent(function() {
      $('#administrationDrawer').fadeIn(200);
      $('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
      $('#administrationDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Resources
    $('#resourcesToggle').hoverIntent(function() {
      $('#resourcesDrawer').fadeIn(200);
      $('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#calendarsDrawer').fadeOut(450);
      $('#resourcesDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Calendars
    $('#calendarsToggle').hoverIntent(function() {
      $('#calendarsDrawer').fadeIn(200);
      $('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer').fadeOut(450);
      $('#calendarsDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Titan Services
    $('#titanServicesToggle').hoverIntent(function() {
      $('#aboutDrawer,#academicsDrawer,#athleticsDrawer,#alumniDrawer,#admissionsDrawer,#administrationDrawer,#resourcesDrawer,#calendarsDrawer').fadeOut(450);
    });

    // Opportunity of place
    $('#opportunityOfPlaceToggle').hoverIntent(function() {
      $('#opportunityOfPlaceDrawer').fadeIn(200);
      $('#sustainabilityDrawer,#researchDrawer,#educationDrawer,#heartDrawer').fadeOut(450);
      $('#opportunityOfPlaceDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Sustainability
    $('#sustainabilityToggle').hoverIntent(function() {
      $('#sustainabilityDrawer').fadeIn(200);
      $('#opportunityOfPlaceDrawer,#researchDrawer,#educationDrawer,#heartDrawer').fadeOut(450);
      $('#sustainabilityDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Research
    $('#researchToggle').hoverIntent(function() {
      $('#researchDrawer').fadeIn(200);
      $('#opportunityOfPlaceDrawer,#sustainabilityDrawer,#educationDrawer,#heartDrawer').fadeOut(450);
      $('#researchDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Education
    $('#educationToggle').hoverIntent(function() {
      $('#educationDrawer').fadeIn(200);
      $('#opportunityOfPlaceDrawer,#sustainabilityDrawer,#researchDrawer,#heartDrawer').fadeOut(450);
      $('#educationDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });

    // Heart
    $('#heartToggle').hoverIntent(function() {
      $('#heartDrawer').fadeIn(200);
      $('#opportunityOfPlaceDrawer,#sustainabilityDrawer,#researchDrawer,#educationDrawer').fadeOut(450);
      $('#heartDrawer').mouseleave(function() {
        allDrawers.fadeOut(500);
      });
    });
  }
});
