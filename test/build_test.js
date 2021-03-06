var grunt = require('grunt'),
fs = require('fs');

exports.build = {
	script: function(test) {
		'use strict';

		test.expect(1);

		var actual = grunt.file.read('tmp/production.js'),
		expected = grunt.file.read('test/expected/production.js');

		test.equal(expected, actual, 'generated build script w/ default options');

		test.done();
	},

	stealRoot: function(test) {
		'use strict';

		test.expect(1);

		var actual = grunt.file.read('tmp/concat.js'),
		expected = grunt.file.read('test/expected/concat.js');

		test.equal(expected, actual, 'path is reset to grunt relative root');

		test.done();
	}

	/*
	TODO: enable test when steal is merged
	overrides: function(test) {
		'use strict';

		test.expect(1);

		var actual = grunt.file.read('foo/production.js'),
		expected = grunt.file.read('test/expected/production.js');

		test.equal(expected, actual, 'generated build script w/ overridden options');

		test.done();
	}
	//*/
}