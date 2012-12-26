define(function(require) {
	'use strict';

	var Marionette = require('marionette');
	var Handlebars = require('handlebars');

	var ErrorInstance = require('error');

	// Override Marionette to use Handlebars Templates
	Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(template) {
		if(!template || template.length === 0) {
			throw new ErrorInstance('NoTemplateError', 'Could not find template: "' + template + '"');
		}
		return template;
	};
	Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
		return Handlebars.compile(rawTemplate);
	};

	// Analytics and Input Filtering Shim
	//var Constructor = Backbone.Marionette.View.prototype.constructor;
	//Backbone.Marionette.View.prototype.constructor = function() {
	//	Constructor.apply(this, arguments);
	//	if(App && App.Analytics) {
	//		this.bindTo(this, 'all', App.Analytics.dispatchTrigger, App.Analytics);
	//	}
	//	
	//};

	//// Triggers Shim
	//Backbone.Marionette.View.prototype.configureTriggers = function() {
	//	if(!this.triggers) {
	//		return;
	//	}
	//	var triggers = this.triggers;
	//	var that = this;
	//	var triggerEvents = {};

	//	if (_.isFunction(triggers)) {
	//		triggers = triggers.call(this);
	//	}
	//	_.each(triggers, function(value, key) {
	//		triggerEvents[key] = function(e) {
	//			// if (e && e.preventDefault){ e.preventDefault(); }
	//			// if (e && e.stopPropagation){ e.stopPropagation(); }
	//			that.trigger(value, e);
	//		};

	//	});
	//	return triggerEvents;
	//};
	//Backbone.Marionette.EventBinder.prototype.bindTo = function(obj, eventName, callback, context) {
	//	
	//	if(context === false){
	//		obj.on(eventName, callback);
	//		context = context || this;
	//	} else {
	//		obj.on(eventName, callback, context || this);
	//		
	//	}

	//	var binding = {
	//		obj : obj,
	//		eventName : eventName,
	//		callback : callback,
	//		context : context
	//	};

	//	this._eventBindings.push(binding);

	//	return binding;
	//};
	return Backbone.Marionette;
});
