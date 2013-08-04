/* jshint node: true */
module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/**\n' +
                '* <%= pkg.name %>.js v<%= pkg.version %> by @fat, @mdo and @zerox\n' +
                '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                '* <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
                '*/\n',
        jqueryCheck: 'if (!jQuery) { throw new Error(\"Bootstrap requires jQuery\") }\n\n',
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %><%= jqueryCheck %>',
                stripBanners: false
            },
            bootstrap: {
                src: ['assets/js/bootstrap-transition.js', 'assets/js/bootstrap-alert.js', 'assets/js/bootstrap-modal.js', 'assets/js/bootstrap-dropdown.js', 'assets/js/bootstrap-scrollspy.js', 'assets/js/bootstrap-tab.js', 'assets/js/bootstrap-tooltip.js', 'assets/js/bootstrap-popover.js', 'assets/js/bootstrap-button.js', 'assets/js/bootstrap-collapse.js', 'assets/js/bootstrap-carousel.js', 'assets/js/bootstrap-typeahead.js', 'assets/js/bootstrap-affix.js'],
                dest: 'assets/js/bootstrap.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            bootstrap: {
                files: {
                    'assets/js/bootstrap.min.js': ['assets/js/bootstrap.js']
                }
            }
        },
        less: {
          compile: {
            files: {
              'assets/css/bootstrap.css': ['assets/less/bootstrap.less'],
              'assets/css/bootstrap-responsive.css': ['assets/less/responsive.less']
            }
          },
          yuicompress: {
            options: {
              yuicompress: true
            },
            files: {
              'assets/css/bootstrap.min.css': ['assets/less/bootstrap.less'],
              'assets/css/bootstrap-responsive.min.css': ['assets/less/responsive.less']
            }
          },
        },
        watch: {
            js: {
                files: 'assets/js/*.js',
                tasks: ['js']
            },
            css: {
                files: 'assets/less/*.less',
                tasks: ['css']
            }
        }
    });


    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // JS distribution task.
    grunt.registerTask('js', ['concat', 'uglify']);

    // CSS distribution task.
    grunt.registerTask('css', ['less']);

    // Full distribution task.
    grunt.registerTask('dist', ['css', 'js']);

    // Default task.
    grunt.registerTask('default', ['css', 'js']);
};
