function equal(sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) {
    $('#result').text("Equilateral");
  } else (sideA === sideB && sideB !== sideC) 
    $('#result').text("Isosceles");
  
}

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    let sideA = parseInt($("input#sideA").val());
    let sideB = parseInt($("input#sideB").val());
    let sideC = parseInt($("input#sideC").val());
    $('#result').text(equal());
  });
});