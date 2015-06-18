var BeerView = Backbone.View.extend({
  model: new Beer(),
  tagName: 'div',
  initialize: function(){
    this.template = _.template($('.beers-list-template').html());
  },
  events: {
    'click .edit-beer': 'edit',
    'click .update-beer': 'update',
    'click .cancel': 'cancel',
    'click .delete-beer': 'delete',
    'click .star-rating': 'rate'
  },

  edit: function (){
    $('.edit-beer').hide();
    $('.delete-beer').hide();
    this.$('.update-beer').show();
    this.$('.cancel').show();

    var name = this.$('.name').html();
    var style = this.$('.style').html();

    this.$('.name').html('<input type="text" class="name-update" value="' + name + '">');
    this.$('.style').html('<input type="text" class="style-update" value="' + style + '">');
  },

  update: function(){
    this.model.set('name', $('.name-update').val());
    this.model.set('style', $('.style-update').val());

    this.model.save(null, {
      success: function(response){
        console.log('Successfully UPDATED beer with _id: ' + response.toJSON()._id);
      },
      error: function(response){
        console.log('Failed to update beer!');
      }
    })
  },

  cancel: function(){
    beersView.render();
  },

  delete: function(){
    this.model.destroy({
      success: function(response){
        console.log('Successfully DELETED beer with _id: ' + response.toJSON()._id);
      },
      error: function(){
        console.log('Failed to DELETE beer!')
      }
    });
  },

  rate: function(){
    this.model.set('rating', $('input[name="rating"]:checked').val());
    console.log($('input[name="rating"]:checked').val());

    var rating = this.$('.star-rating').html();
    this.$('.star-rating').html('<input type="radio" class="rating-update" value="' + rating + '">');

    this.model.save(null, {
      success: function(response){
        console.log('Successfully RATED beer with _id: ' + response.toJSON()._id);
      },
      error: function(response){
        console.log('Failed to rate beer!');
      }
    });
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
