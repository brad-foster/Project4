$(document).ready(function(){
  $('.add-beer').on('click', function(){
    var beer = new Beer({
      name: $('.name-input').val(),
      style: $('.style-input').val(),
      image: $('.image-input').val()
    });
    // $('.name-input').val('');
    // $('.style-input').val('');
    // $('.image-input').val('');
    console.log(beer.toJSON());
    beers.add(beer);
  })
});
