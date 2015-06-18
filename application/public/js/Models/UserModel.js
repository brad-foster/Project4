Backbone.Model.prototype.idAttribute = '_id';

var User = Backbone.Model.extend({
  defaults: {
    email: '',
    password: '',
    beers: []
  },

  initialize: function (){
    var self = this;
    this.beers = new beerCollection(this.get('beers'));
    this.beers.url = function (){
      return self.url() + '/beers';
    };
  },

  url: '/api/users'
});
