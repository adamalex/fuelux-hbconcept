// Load page content from Handlebars template
define(function (require) {

	// Load libraries
	var $ = require('jquery');
	require('fuelux/all');

	// Load sample data and demo logic
	var sampledata = require('./sampledata');
	var Handlebars = require('./fuelux-handlebars');

	// Cache jQuery references
	var $navigation = $('#Navigation');
	var $content = $('#PageContent');

	function loadContent() {

		// Get current url hash, defaulting to step1
		if (!location.hash) location.hash = 'step1';
		var content = location.hash.substring(1);

		// Dynamically load template with RequireJS
		require(['text!templates/' + content + '.hbs'], function (template) {

			// Apply template to the document with Handlebars
			$content.html(Handlebars.compile(template)(sampledata));

			// Initialize newly-added controls
			$content.find('.checkbox-custom > input[type=checkbox]').each(function () {
				var $this = $(this);
				if ($this.data('checkbox')) return;
				$this.checkbox($this.data());
			});
			$content.find('.radio-custom > input[type=radio]').each(function () {
				var $this = $(this);
				if ($this.data('radio')) return;
				$this.radio($this.data());
			});
			$content.find('.select').each(function () {
				var $this = $(this);
				if ($this.data('select')) return;
				$this.select($this.data());
			});
		});

		// Update navigation display
		$navigation.find('li').removeClass('active');
		$navigation.find('[data-content="' + content + '"]').addClass('active');
	}

	// Handle navigation clicks
	$navigation.on('click', 'li', function () {
		location.hash = $(this).data('content');
	});

	// Load content on hash change and first module load
	$(window).on('hashchange', loadContent);
	loadContent();
});