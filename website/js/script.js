
//Colour Picker
document.getElementById("colorpicker").addEventListener("change", function() {
    document.getElementById("sec2").style.backgroundColor = this.value;
});

//Colour Picker
document.getElementById("colorpickertext").addEventListener("change", function() {
    document.getElementById("header-text").style.color = this.value;
});

$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});


//Animation
//function chageWord() {
//  let word = document.getElementsByTagName("span");
//  console.log(word);
//  let words = ["extra", "super", "really", "extra", "so"];
//  word[0].innerHTML = words[Math.floor(Math.random() * words.length)];
//}

function run() {
  let timer;
  timer = setInterval(function () {
    chageWord();
  }, 4000);
}

run();
