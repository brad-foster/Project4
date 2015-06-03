var Beers = Backbone.Collection.extend({
  url: 'http://www.barleyapp.herokuapp.com/api/beers'
});

var beers = new Beers();
