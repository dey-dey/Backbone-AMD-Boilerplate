define(function( require ) {
    "use strict";

        //libs
    var $ = require('jquery'),
        _ = require('underscore'), 
        Backbone = require('backbone'),
        Handlebars = require('handlebars');

        //mv*

    var Appview = Backbone.View.extend({
      el: $('body'),
      initialize: function(){
        console.log("App initialize");
      },
      render: function(){
        console.log("App render");
        var rendered = $('<h1>').html('App loaded!');

        $(this.el).append(rendered);
      },
    });

    return Appview;
  }
);
