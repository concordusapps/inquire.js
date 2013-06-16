module.exports = (grunt) ->
  grunt.initConfig

    # LiveScript
    livescript:
      build:
        files: [
          'lib/inquire.js': 'src/inquire.ls'
        ]

  grunt.loadNpmTasks 'grunt-livescript'

  grunt.registerTask 'default', ['livescript:build']
