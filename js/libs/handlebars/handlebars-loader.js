define(['handlebars'],
	function(Handlebars) {
		"use strict";

		//temporary stop-gap for jQuery global space infection
		if(typeof jQuery !== 'undefined') {
			jQuery.noConflict(true);
		}
	
		return Handlebars;
	}
);
