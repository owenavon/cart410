
//Colour Picker
document.getElementById("colorpicker").addEventListener("change", function() {
    document.getElementById("header").style.backgroundColor = this.value;
});

//Colour Picker
document.getElementById("colorpickertext").addEventListener("change", function() {
    document.getElementById("header-text").style.color = this.value;
});

$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

function run() {
  let timer;
  timer = setInterval(function () {
    chageWord();
  }, 2000);
}

run();
