module.exports = function(grunt) {

	'use strict';

	var appPath = 'src/app.js',
		testPath = 'src/*Spec.js',
		config = {};

	config.jasmine = {
		pivotal: {
			src: appPath, 
			options: {
				specs: testPath
			}
		}
	};
	config.jshint = {
		all: [testPath, appPath],
		options: {
			curly: true
		}
	};
	config.watch = {
		files: [testPath, appPath], 
		tasks: ['jshint','jasmine']
	};

	grunt.initConfig(config);

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'jasmine']);    
};