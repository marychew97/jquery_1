$(document).ready(function(){

  var content = "My New Awesome Content";

  $(".panel-button").on("click",function(){
    var panelId = $(this).attr("data-panelid");
    $("#"+panelId).toggle();
    $("#"+panelId+" .card-body").html(content);
  });
});
