
//Colour Picker
document.getElementById("colorpicker").addEventListener("change", function() {
    document.getElementById("sec1").style.backgroundColor = this.value;
});

//Colour Picker
document.getElementById("colorpickertext").addEventListener("change", function() {
    document.getElementById("custom-slider").style.color = this.value;
});