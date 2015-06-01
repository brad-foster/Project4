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
    'click .delete-beer': 'delete'
  },

  edit: function (){
    $('.edit-beer').hide();
    $('.delete-beer').hide();
    this.$('.update-beer').show();
    this.$('.cancel').show();

    var name = this.$('.name').html();
    var style = this.$('.style').html();
    var image = this.$('.image').html();

    this.$('.name').html('<input type="text" class="form-control name-update" value="' + name + '">');
    this.$('.style').html('<input type="text" class="form-control style-update" value="' + style + '">');
    this.$('.image').html('<input type="text" class="form-control image-update" value="' + image + '">');
  },

  update: function(){
    this.model.set('name', $('.name-update').val());
    this.model.set('style', $('.style-update').val());
    this.model.set('image', $('.image-update').val());
  },

  cancel: function(){
    beersView.render();
  },

  delete: function(){
    this.model.destroy();
  },

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
