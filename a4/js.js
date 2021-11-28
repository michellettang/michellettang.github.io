$(document).ready(function(){
  $("#funny-btn").click(function(){
    $("p").hide();
  });

  $(".radio-grp").click(function(){
    var $element = $(this);
    var $city = $("label[for='" + $element.attr('id') + "']").text();
    $("#city-text").text($city);
    $("#city-text").attr("hidden", false);
  });

  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( "#accordion" ).accordion();
  } );

  $( function() {
    $( "#doge" ).resizable();
  } );
});


// testing2
