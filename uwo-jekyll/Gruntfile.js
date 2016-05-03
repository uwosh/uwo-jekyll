module.exports = function(grunt){

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
          'bower_components/fastclick/lib/fastclick.js',
          'bower_components/foundation/js/foundation.js',
          'js/slick.js',
          'js/jquery.truncate.js',
          'js/bespoke/bespoke.js',
          'js/bespoke/bespoke-loop.js',
          'js/app.js',
          'js/jquery.hoverIntent.js',
          'js/showHide.js',
          'js/moment.js',
          'js/eventTracking.js',
          'js/classList.js'
        ],
        dest: 'js/uwosh.js'
      }
    },

    uglify: {
      build: {
        src: 'js/uwosh.js',
        dest: 'js/uwosh.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/uwosh.css': 'css/uwosh.scss'
        }
      }
    }

  });

  grunt.registerTask('default', ['sass', 'concat', 'uglify']);

};
