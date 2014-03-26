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
      test:
        files:
          'test/inquire.js': [
            'src/**/*.purs'
            'test/**/*.purs'
            'bower_components/purescript-*/src/**/*.purs'
            'bower_components/purescript-*/src/**/*.purs.hs'
          ]
        options:
          main: 'Network.Inquire.Laws'

    execute:
      target:
        src: ['test/inquire.js']

  grunt.loadNpmTasks 'grunt-purescript'
  grunt.loadNpmTasks 'grunt-execute'

  grunt.registerTask 'default', ['compile', 'test']
  grunt.registerTask 'compile', ['purescript:compile']
  grunt.registerTask 'test', ['purescript:test', 'execute']
