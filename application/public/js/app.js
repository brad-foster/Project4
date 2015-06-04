$(document).ready(function(){
  $('.add-beer').on('click', function(){
    var beer = new Beer({
      name: $('.name-input').val(),
      style: $('.style-input').val(),
      image: $('.image-input').val(),
      rating: $('input[name="rating"]:checked').val()
    });

    $('.name-input').val('');
    $('.style-input').val('');
    $('.image-input').val('');
    $('.rating-input').prop("checked", false);

    beers.add(beer);

    beer.save(null, {
      success: function(response){
        console.log('Successfully SAVED beer with _id: ' + response.toJSON()._id);
      },
      error: function(){
        console.log('Failed to save beer!')
      }
    });
  });
});
