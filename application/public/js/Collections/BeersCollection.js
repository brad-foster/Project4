var Beers = Backbone.Collection.extend({
  url: 'https://fathomless-cove-1161.herokuapp.com/api/beers'
});

var beers = new Beers();
