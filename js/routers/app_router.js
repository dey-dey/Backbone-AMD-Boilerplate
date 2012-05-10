// filename: router.js
define(function( require ){
    
        //libs
    var $ = require('jquery'),
        _ = require('underscore'), 
        Backbone = require('backbone'),

        //mv*
        AppView = require('views/app');


    var AppRouter = Backbone.Router.extend({
      routes: {
        "": "defaultRoute", //trans-river.html
        "transactions": "transactions", //trans-river.html
      }, 


      defaultRoute: function() {
        console.log("default route");

        var app = new AppView();
        app.render();
        
      },
      
    });

    var initialize = function(){
      // Load the router
      var app_router = new AppRouter();
      Backbone.history.start({pushstate: true});
    }


    return {
      initialize: initialize
    }
});
