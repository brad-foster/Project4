$(document).ready(function(){
  $('.add-beer').on('click', function(){
    var beer = new Beer({
      name: $('.name-input').val(),
      style: $('.style-input').val(),
      image: $('.image-input').val(),
      rating: ''
    });

    $('.name-input').val('');
    $('.style-input').val('');
    $('.image-input').val('');

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

  $(function(){
    $('#loginform').submit(function(e){
      return false;
    });

    $('#logintrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });
  });

  $(function(){
    $('#signuptrigger').leanModal({ top: 110, overlay: 0.45, closeButton: ".hidemodal" });

    $('#signupbtn').on('click', function(){
      if ($('signup-password').val() === $('signup-password-confirm').val()){
        console.log('this worked');
        var user = new User({
          email: $('signup-email').val(),
          password: $('signup-password-confirm').val()
        });
      } else {
        alert("Password confirmation incorrect, please re-enter password information.");
        $('signup-password').val('');
        $('signup-password-confirm').val('');
      }

      users.add(user);

      user.save(null, {
        success: function(response){
          console.log('Successfully SAVED user with _id: ' + response.toJSON()._id);
        },
        error: function(){
          console.log('Failed to save user!')
        }
      });
    });

  });
});
