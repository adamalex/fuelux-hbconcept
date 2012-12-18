// Customize Handlebars for Fuel UX
define(function (require) {

	var Handlebars = require('handlebars');

	var Templates = {
		checkboxes: Handlebars.compile(require('text!templates/controls/checkboxes.hbs')),
		combobox: Handlebars.compile(require('text!templates/controls/combobox.hbs')),
		pillbox: Handlebars.compile(require('text!templates/controls/pillbox.hbs')),
		radios: Handlebars.compile(require('text!templates/controls/radios.hbs')),
		search: Handlebars.compile(require('text!templates/controls/search.hbs')),
		select: Handlebars.compile(require('text!templates/controls/select.hbs')),
		spinner: Handlebars.compile(require('text!templates/controls/spinner.hbs')),
		wizard: Handlebars.compile(require('text!templates/controls/wizard.hbs'))
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

	Handlebars.registerHelper('search', function () {
		return new Handlebars.SafeString(Templates.search());
	});

	Handlebars.registerHelper('select', function (items) {
		return new Handlebars.SafeString(Templates.select(items));
	});

	Handlebars.registerHelper('spinner', function () {
		return new Handlebars.SafeString(Templates.spinner());
	});

	Handlebars.registerHelper('wizard', function (items) {
		var data = { first: items[0], others: [] };

		for (var i = 1; i < items.length; i++) {
			data.others.push({ number: i + 1, name: items[i] });
		}

		return new Handlebars.SafeString(Templates.wizard(data));
	});

	return Handlebars;
});