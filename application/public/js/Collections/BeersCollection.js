var Beers = Backbone.Collection.extend({
  url: '/api/beers'
});

var beers = new Beers();
