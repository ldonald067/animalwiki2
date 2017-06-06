$(document).ready(function() {
  $("#button").click(function(){
    var animal = $("#animal").val();
    if(animal === "turtle") {
      $("#turtle-hidden").show();
    }
    else if (animal === "insect") {
      $("#insect-hidden").show();
    }
    else {
      $("#snake-hidden").show();
    }
        //var turt = $("#turtle-hidden").val();
        //var ins = $("#turtle-hidden").val();
        //  var  = $("#turtle-hidden").val();
      });
    });
