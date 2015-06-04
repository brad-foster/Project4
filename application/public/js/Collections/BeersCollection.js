var Beers = Backbone.Collection.extend({
  url: 'http://localhost:3000/api/beers'
});

var beers = new Beers();
