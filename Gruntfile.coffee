module.exports = (grunt) ->
  grunt.initConfig

    purescript:
      compile:
        files:
          'lib/inquire.js': [
            'src/**/*.purs'
            'bower_components/purescript-*/src/**/*.purs'
            'bower_components/purescript-*/src/**/*.purs.hs'
          ]
        options:
          externs: 'lib/inquire.e.ps'
          modules: [
            'Network.Inquire'
            'Network.Inquire.Combinators'
            'Network.Inquire.Zipper'
          ]
          runtimeTypeChecks: true
          tco: true
      test:
        files:
          'test/inquire.js': [
            'src/**/*.purs'
            'test/**/*.purs'
            'bower_components/purescript-*/src/**/*.purs'
            'bower_components/purescript-*/src/**/*.purs.hs'
          ]
        options:
          main: 'Network.Inquire.Properties'

    execute:
      target:
        src: ['test/inquire.js']

  grunt.loadNpmTasks 'grunt-purescript'
  grunt.loadNpmTasks 'grunt-execute'

  grunt.registerTask 'default', ['purescript', 'execute']
  grunt.registerTask 'test', ['purescript:test', 'execute']
