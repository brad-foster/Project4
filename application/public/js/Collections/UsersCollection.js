var Users = Backbone.Collection.extend({
  url: '/api/users'
});

var users = new Users();
