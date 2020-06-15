module.exports = function( eleventyConfig ) {
	eleventyConfig.setQuietMode( true );
	eleventyConfig.setTemplateFormats( 'html,md' );

	eleventyConfig.addPassthroughCopy( 'css' );
	eleventyConfig.addPassthroughCopy( 'fonts' );
	eleventyConfig.addPassthroughCopy( 'image' );
	eleventyConfig.addPassthroughCopy( 'js' );

	eleventyConfig.addPassthroughCopy( 'robots.txt' );
	eleventyConfig.addPassthroughCopy( 'sitemap.xml' );

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.setBrowserSyncConfig( {
		ui: false
		,ghostMode: false
		,logLevel: 'silent'
	} );
};
