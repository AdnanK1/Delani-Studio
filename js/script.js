$(document).ready(function(){
  $(".design").click(function(){
    $(".design_hide").toggle();
    $(".design_show").toggle();
  });
});
$(document).ready(function(){
  $(".dev").click(function(){
    $(".dev_hide").toggle();
    $(".dev_show").toggle();
  });
});
$(document).ready(function(){
  $(".product").click(function(){
    $(".product_hide").toggle();
    $(".product_show").toggle();
  });

  //HOVER
  $(".portfolio .row .col-md-3").hover(function(){
    //in
    $(this).find('div.display').show();
    
  },function(){
    //out
    $(this).find('div.display').hide();
  });
  $('.mainform').submit(function(){
    var name = document.getElementById('#name').value();
    var email = document.getElementById('#email').value();
   alert();
    
  });
});
