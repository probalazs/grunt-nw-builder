(function(module) {
    'use strict';

    var _grunt = {};
    var NwBuilder = require('nw-builder');

    function log(message) {
        _grunt.log.writeln(message);
    }

    function success() {
        _grunt.log.ok('NW.js app created.');
    }

    function error(message) {
        _grunt.fail.fatal(message);
    }

    function task(options) {
        var nw = new NwBuilder(options);
        nw.on('log', log);
        return nw
            .build()
            .then(success)
            .catch(error);
    }

    module.exports = function(grunt) {
        _grunt = grunt;
        _grunt.registerMultiTask('nwjs', 'Packaging app', function() {
            var done = this.async();
            task(this.options()).then(done);
        }); 
    };
})(module);
