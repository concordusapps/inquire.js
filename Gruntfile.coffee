module.exports = (grunt) ->
  grunt.initConfig

    purescript:
      compile:
        files:
          'lib/inquire.js': 'src/**/*.purs'
        options:
          runtimeTypeChecks: true
          externs: 'lib/inquire.e.ps'

  grunt.loadNpmTasks 'grunt-purescript'

  grunt.registerTask 'default', ['purescript']
