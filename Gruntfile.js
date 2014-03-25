module.exports = function(grunt) {

	'use strict';

	var config = {};

	config.jasmine = {
		src: [
			'src/*.js',
			'!src/*Spec.js'
		],
		options: {
			vendor: [],
			specs: 'src/*Spec.js'
		}
	};
	config.jshint = {
		all: ['src/*.js'],
		options: {
			curly: true
		}
	};
	config.watch = {
		files: 'src/*.js', 
		tasks: ['jshint','jasmine'],
		options: {
			livereload: true // uses default port 35729
		}
	};

	grunt.initConfig(config);

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'jasmine']);    
};