define(function(require){
  var Marionette = require('marionette'),
      Shim = require('marionetteShim'),

      AppView = require('./views/View.AppView'),
      App = new Marionette.Application();

  App.addRegions({
      header: '#header',
      main: '#mainContainer',
      footer: '#footer'
  });


  App.addInitializer(function (options){
      App.Router = Marionette.AppRouter.extend({});
      App.main.show(new AppView());

      Backbone.history.start();
  });


  App.start();

});
