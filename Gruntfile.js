module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
            
            pkg: grunt.file.readJSON('package.json'), 
 

            stylus: {
              compile: {
                options: {
                  use: [
                    require('kouto-swiss'),
                    require('rupture')
                  ],
                },
                files: {
                  'css/stylesheet.css': 'styl/stylesheet.styl'
                }
              }
            } ,           

            connect: {
                server: {
                  options: {
                    port: 8001,
                    livereload: true,
                    appName: 'open',
                    open: true
                  }
                }
            },  

            cssbeautifier : {
              files : ["css/**/*.css"]
            },     


            watch: {
                css: {
                    files: '**/*.styl',
                    tasks: ['stylus', 'cssbeautifier']
                },
                js: {
                    files: 'js/*.js' 
                },
                html: {
                    files: '*.html' 
                },
                options: {
                    livereload: true
                }
            }

    });

    // Load required modules 
    grunt.loadNpmTasks('grunt-stylus-map');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect'); 
    grunt.loadNpmTasks('grunt-cssbeautifier');

    // Task definitions 
    grunt.registerTask('default', ['connect', 'watch']).option("force");
    
};
