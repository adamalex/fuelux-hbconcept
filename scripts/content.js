// Load page content from Handlebars template
define(function (require) {

	var data = require('./data');
	var Handlebars = require('./fuelux-handlebars');
	var $ = require('jquery');
	require('fuelux/all');

	var $navigation = $('#Navigation');

	function loadContent() {
		// Determine content, defaulting to step1
		if (!location.hash) location.hash = 'step1';
		var content = location.hash.substring(1);

		// Load template and apply it to the page with Handlebars
		require(['text!templates/' + content + '.hbs'], function (template) {
			$('#PageContent').html(Handlebars.compile(template)(data));
		});

		// Reconfigure navigation display
		$navigation.find('li').removeClass('active');
		$navigation.find('[data-content="' + content + '"]').addClass('active');
	}

	// Handle navigation clicks
	$navigation.on('click', 'li', function () {
		location.hash = $(this).data('content');
	});

	// Load content on hash change and page load
	$(window).on('hashchange', loadContent);
	loadContent();
});