(function() {
	"use strict";
	
	require.config({
		paths : {
			jquery: 'libs/jquery/require-jquery',		
			underscore: 'libs/underscore/underscore-min',
			backbone: 'libs/backbone/backbone-min',
			jqueryui: 'libs/jquery/jquery-ui-1.8.19.custom.min',

			handlebars: 'libs/handlebars/Handlebars',
			text: 'libs/require/text',
		},
		urlArgs: "bust=" +  (new Date()).getTime()	//cache-busting for development
	});
	
  require(['routers/app_router'],
      function(Router) {
        Router.initialize();
      }
  );
})();

