/*global module:false*/
module.exports = function(grunt) {

	grunt.initConfig({
		lint: {
			files: ['grunt.js', 'scripts/**/*.js']
		},
		watch: {
			files: ['index.html', 'grunt.js', 'scripts/**', 'templates/**'],
			tasks: 'lint'
		},
		jshint: {
			options: {
				curly: false,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true,
				devel: true
			},
			globals: {
				define: true,
				require: true
			}
		}
	});

	grunt.registerTask('default', 'lint');
	grunt.registerTask('devserver', 'lint server watch');

};