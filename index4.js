$(document).ready(function(){
  //$("#panel1").hide(300).show(1000).hide(300).show(1000);
  //$("#panel1").slideUp(1000).delay(1000).slideDown(1000);
  //$("#panel1").fadeOut(1000).delay(1000).slideDown(1000);
  //$("#panel1").fadeToggle(1000).fadeToggle(1000);
  //$("#panel1").slideToggle(1000).slideToggle(1000);
//  $("#panel1").toggle(1000).toggle(1000);
/*  $("#panel1").css({
    color:"red",
    fontWeight:"bold", //not font-weight in js because dash will be read as minus
    display:"none"
  });*/

  //$("#panel1").hide();
  $("#panel2").css({
    opacity:"0.5"
  });
});

$(document).ready(function() {
  $("#btn1").html("my button");
  $("#panel2").html("my panel <strong>my bold</strong>");
  $("#btn2").on("click", function(){
    $("#panel3").fadeToggle(200);
  });

  //besides click, there is mouseover
  $("#btn3").on("click", function(){
    $("#panel4").slideToggle(200);
  });

  /*$("#btn4").on("click",  function(){
    $("#panel2 .card-header").html("my new panel content");
  });*/

  $("#btn1").on("click", function(){
    $("#panel1").toggle();
  });

  $("#btn2").on("click", function(){
    $("#panel2").toggle();
  });

  $("#btn3").on("click", function(){
    $("#panel3").toggle();
  });

  $("#btn4").on("click", function(){
    $("#panel4").toggle();
  });
});
