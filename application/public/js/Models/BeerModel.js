Backbone.Model.prototype.idAttribute = '_id';

var Beer = Backbone.Model.extend({
  defaults: {
    name: '',
    style: '',
    image: '',
    rating: ''
  },
  url: '/api/beers'
});
