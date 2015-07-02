module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //clean: {
        //    css: ["dist/css/*.css", "!dist/css/*.min.css"]
        //},
        autoprefixer: {
            options: {
                browsers: ['> 5%', 'last 2 versions','ie 8', 'ie 9']
            },
            dist: {
                src: 'dist/css/*.css'
            }
        },
        jshint: {
            js: ['src/js/*.js','!src/js/*.min.js']
        },
        jsbeautifier : {
            files : ["src/js/*.js","!src/js/*.min.js"]
        },
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['*.js','!*.min.js'],
                    dest: 'dist/js'
                }]
            }
        },
        copy: {
            templates: {
                files: [
                    {
                        expand: true,
                        src: ['src/*.html'],
                        flatten: true,
                        dest: 'dist/',
                        filter: 'isFile'
                    }
                ]
            },
            images:{
                files:[
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['images/**'],
                        dest: 'dist/'
                    }
                ]
            },
            js:{
                files:[
                    {
                        expand: true,
                        src: ['src/js/*.js'],
                        flatten: true,
                        dest: 'dist/js',
                        filter: 'isFile'
                    }
                ]
            },
            css:{
                files:[
                    {
                        expand: true,
                        src: ['src/css/*.css'],
                        flatten: true,
                        dest: 'dist/css',
                        filter: 'isFile'
                    }
                ]
            }
        },
        watch:{
            css:{
                files:['src/css/*.css'],
                tasks:['copy:css']
            },
            templates:{
                files:['src/*.html'],
                tasks:['copy:templates']
            },
            images:{
                files:['src/images/**'],
                tasks:['copy:images']
            },
            js:{
                files:['src/js/*.js'],
                tasks:['copy:js']
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.css'
                }]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-jsbeautifier");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['jshint','jsbeautifier','copy','autoprefixer','watch']);
    grunt.registerTask('deploy', ['cssmin','uglify']);

};