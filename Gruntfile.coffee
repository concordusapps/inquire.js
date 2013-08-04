module.exports = (grunt) ->
  grunt.initConfig

    browserify:
      browser:
        dest: './lib/inquire-browser.js'
        src: './src/inquire.ls'
      options:
        standalone: 'Inquire'
        transform: ['liveify']

    jison:
      files:
        src: './src/grammar.ls'
        dest: './lib/parser.js'

    livescript:
      'lib/inquire.js': 'src/inquire.ls'

  grunt.loadNpmTasks 'grunt-livescript'
  grunt.loadNpmTasks 'grunt-browserify'

  grunt.registerMultiTask 'jison', 'Create a parser from our grammar', ->
    # Change our require-er to livescript,
    # so we can parse some livescript like it's no big thing.
    require 'LiveScript'
    {Parser} = require 'jison'
    compiled = require this.data.src
    parser = new Parser compiled
    grunt.file.write this.data.dest, parser.generate()

  grunt.registerTask 'default', ['livescript', 'jison', 'browserify']
