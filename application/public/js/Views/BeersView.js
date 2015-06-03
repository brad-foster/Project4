var BeersView = Backbone.View.extend({
  model: beers,
  el: $('.beers-list'),
  initialize: function(){
    var self = this;
    this.model.on('add', this.render, this);
    this.model.on('change', function(){
      setTimeout(function(){
        self.render();
      }, 30);
    }, this);
    this.model.on('remove', this.render, this);

    this.model.fetch({
      success: function(response){
        _.each(response.toJSON(), function(item){
          console.log('Successfully GOT beer with _id: ' + item._id);
        });
      },
      error: function(){
        console.log('Failed to get beers!');
      }
    });
  },
  render: function(){
    var self = this;
    this.$el.html('');
    _.each(this.model.toArray(), function(beer){
      self.$el.prepend((new BeerView({model: beer})).render().$el);
    return this;
    });
  }
});

var beersView = new BeersView();
