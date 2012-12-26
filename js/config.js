	
require.config({
    paths : {
        jquery: 'libs/jquery/require-jquery.1.8.3',		
        underscore: 'libs/underscore/underscore-min.1.4.3',
        backbone: 'libs/backbone/backbone-amd-min.0.9.9',
        marionette: 'libs/backbone/backbone.marionette.core.1.0.0',
        'backbone.wreqr': 'libs/backbone/backbone.wreqr.min',
        'backbone.eventbinder': 'libs/backbone/backbone.eventbinder.min',
        'backbone.babysitter': 'libs/backbone/backbone.babysitter.min',

        hbs: 'libs/handlebars/hbs',
        i18nprecompile: 'libs/handlebars/i18nprecompile',
        json2: 'libs/json/json2',
        handlebars: 'libs/handlebars/Handlebars',

        marionetteShim: 'libs/shims/Shim.Marionette',
        modal: '/libs/twitter-bootstrap/bootstrap-modal',
        validation: 'libs/backbone/backbone-validation',
        error: 'mixins/Mixin.ErrorInstance',
        text: 'libs/require/text'
    },
    hbs : {
        templateExtension : 'hbs',
        // if disableI18n is `true` it won't load locales and the i18n helper
        // won't work as well.
        disableI18n : true
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore : {
            exports : '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        validation: {
            deps: ['backbone']
        },
        tempus: {
            exports: 'Tempus'
        },
        raphael: {
            exports: 'Raphael'
        }
    },

    urlArgs: "bust=" +  (new Date()).getTime()	//cache-busting for development
});
	

