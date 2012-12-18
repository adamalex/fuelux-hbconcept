// Configure RequireJS
require.config({
	baseUrl: 'vendor',
	paths: {
		app: '../scripts',
		templates: '../templates'
	},
	shim: {
		handlebars: {
			exports: 'Handlebars'
		}
	}
});

// Load page content
require(['app/content']);