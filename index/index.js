//COde for working of dropdownlist

$(".dropdown-menu li a").click(function () {
  console.log(2);
  $(".btn:first-child").html($(this).text() + ' <span class="caret"></span>');
});

//Code for working of the complexity slider

const slider_complex = document.getElementById("myRange");
var output_complex = document.getElementById("demo");
output_complex.innerHTML = slider_complex.value;
//Code for Animation speed slider
slider_complex.oninput = function () {
  output_complex.innerHTML = this.value;
};

//Code for Pause button function
function pause_resume() {
  var value = document.getElementById("pause").innerHTML;
  if (value == "Pause") document.getElementById("pause").innerHTML = "Resume";
  else document.getElementById("pause").innerHTML = "Pause";
}
