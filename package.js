Package.describe({
	summary: "wikipedia-js NPM module packaged for Meteor."
});

Npm.depends({ 'wikipedia-js': '0.0.5' });

Package.on_use(function (api) {
	api.add_files('wikipedia_js.js', 'server');
});