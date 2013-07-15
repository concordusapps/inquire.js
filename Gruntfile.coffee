module.exports = (grunt) ->
  grunt.initConfig

    # LiveScript
    livescript:
      build:
        files: [
          'lib/inquire.js': 'src/inquire.ls'
        ]

    jison:
      files:
        src: './src/grammar.ls'
        dest: './lib/parser.js'

    cjs:
      bundle:
        dest: 'lib/inquire.js'
        entryPoint: 'src/inquire.ls'
        options:
          export: 'inquire'
          handlers:
            '.ls': (ls, filename) ->
              {parse} = require 'esprima'
              {compile} = require 'LiveScript'
              parse compile ls
          ignoreMissing: true
          node: 'false'

  grunt.loadNpmTasks 'grunt-livescript'

  grunt.registerMultiTask 'jison', 'Create a parser from our grammar', ->
    # Change our require-er to livescript,
    # so we can parse some livescript like it's no big thing.
    require 'LiveScript'
    {Parser} = require 'jison'
    compiled = require this.data.src
    parser = new Parser compiled
    grunt.file.write this.data.dest, parser.generate()

  grunt.registerMultiTask 'cjs', 'Wrap everything up for the browser', ->
    if this.nameArgs is 'cjs:bundle'
      {cjsify} = require 'commonjs-everywhere'
      {generate} = require 'escodegen'
      js = generate cjsify this.data.entryPoint, __dirname, this.data.options
      grunt.file.write this.data.dest, js
      grunt.log.write "File #{this.data.dest} created."

  grunt.registerTask 'default', ['jison', 'cjs']
