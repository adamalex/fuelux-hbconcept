// Load page content from Handlebars template
define(function (require) {

	var Handlebars = require('handlebars');
	var $ = require('jquery');

	var templates = {
		step1: require('text!templates/step1.hbs')
	};

    $('#PageContent').html(Handlebars.compile(templates.step1)());
});