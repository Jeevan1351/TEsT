//COde for working of dropdownlist

$(".dropdown-menu li a").click(function () {
  $(".btn:first-child").html($(this).text() + ' <span class="caret"></span>');
});

//Code for working of the slider

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};
