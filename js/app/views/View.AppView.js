define(function( require ) {
    "use strict";

        //libs
    var Marionette = require('marionette'),
        tmpl = require('text!../templates/Template.MainContent.html'),
        Handlebars = require('handlebars');


    var Appview = Marionette.ItemView.extend({
      className: 'hella',
      template: tmpl,
      initialize: function(){
        console.log("App initialize");
      },
      onRender: function(){
      }
    });

    return Appview;
  }
);
