'use strict';

const Builder = require('dummy-nw-builder');

module.exports = (grunt) => {
    grunt.registerMultiTask('nwjs', 'Packaging app', function() {
        /* eslint-disable no-invalid-this */
        task(this.options())
            .then(this.async());
        /* eslint-enable no-invalid-this */
    });

    function task(config) {
        const builder = new Builder(config);
        return builder.build()
            .then(success, error);
    }

    function success() {
        grunt.log.ok('NW.js app created.');
    }

    function error(message) {
        grunt.fail.fatal(message);
    }
};
