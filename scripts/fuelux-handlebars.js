// Customize Handlebars for Fuel UX
define(function (require) {

	var Handlebars = require('handlebars');

	var Templates = {
		combobox: Handlebars.compile(require('text!templates/combobox.hbs'))
	};

	Handlebars.registerHelper('combobox', function (items) {
		return new Handlebars.SafeString(Templates.combobox(items));
	});

	return Handlebars;
});