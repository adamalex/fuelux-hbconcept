// Customize Handlebars for Fuel UX
define(function (require) {

	var Handlebars = require('handlebars');

	var Templates = {
		checkboxes: Handlebars.compile(require('text!templates/controls/checkboxes.hbs')),
		combobox: Handlebars.compile(require('text!templates/controls/combobox.hbs')),
		pillbox: Handlebars.compile(require('text!templates/controls/pillbox.hbs')),
		radios: Handlebars.compile(require('text!templates/controls/radios.hbs'))
	};

	Handlebars.registerHelper('checkboxes', function (items) {
		return new Handlebars.SafeString(Templates.checkboxes(items));
	});

	Handlebars.registerHelper('combobox', function (items) {
		return new Handlebars.SafeString(Templates.combobox(items));
	});

	Handlebars.registerHelper('pillbox', function (items) {
		return new Handlebars.SafeString(Templates.pillbox(items));
	});

	Handlebars.registerHelper('radios', function (items, options) {
		var data = { items: items, name: options.hash.name };
		return new Handlebars.SafeString(Templates.radios(data));
	});

	return Handlebars;
});