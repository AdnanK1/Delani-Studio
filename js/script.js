
$(document).ready(function(){
  $('#design_show').click(function(event){
    $('#design_hide').show();
    $('#design_show').hide();
  });
  $('#design_hide').click(function(){
    $('#design_show').show();
    $('#design_hide').hide();
  });
  $(".mainForm").submit(function(event) {
    var forms = ["Name","Email","textarea"];

    forms.forEach(function(form) {
      var userInput = $("input#" + form).val();
      $("." + form).text(userInput);
    });

    $(".dialogbox").show();

    event.preventDefault();
  });
});
