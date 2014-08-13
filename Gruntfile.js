module.exports = function(grunt){

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'bower_components/jquery/jquery.js',
          'js/angular-app.js',
          'bower_components/foundation/js/foundation.js',
          'bower_components/foundation/js/foundation/foundation.equalizer.js',
          'js/app.js',
          'js/jquery.hoverIntent.js',
          'js/showHide.js',
          'js/moment.js',
          'js/eventTracking.js',
          'js/bespoke/bespoke.js',
          'js/bespoke/bespoke-loop.js',
          'js/bespoke/bespoke-social.js'
        ],
        dest: 'js/uwo.js'
      }
    },

    uglify: {
      build: {
        src: 'js/uwo.js',
        dest: 'js/uwo.min.js'
      }
    }

  });

  grunt.registerTask('default', ['concat', 'uglify']);

};
