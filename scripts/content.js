// Load page content from Handlebars template
define(function (require) {

	var data = require('./data');
	var Handlebars = require('./fuelux-handlebars');
	var $ = require('jquery');
	require('fuelux/all');

	var $navigation = $('#Navigation');
	var $content = $('#PageContent');

	function loadContent() {
		// Determine content, defaulting to step1
		if (!location.hash) location.hash = 'step1';
		var content = location.hash.substring(1);

		// Load template and apply content to document
		require(['text!templates/' + content + '.hbs'], function (template) {
			// Apply template to the document with Handlebars
			$content.html(Handlebars.compile(template)(data));

			// Initialize controls
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