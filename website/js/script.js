// Text Colour Picker
document.getElementById("colorpicker-text").addEventListener("change", function() {
    document.getElementById("header-text").style.color = this.value;
});

// Background Colour Picker
document.getElementById("colorpicker-background").addEventListener("change", function() {
    document.getElementById("header-background").style.backgroundColor = this.value;
});

// Highlight Colour Picker
document.getElementById("colorpicker-highlight").addEventListener("change", function() {
    document.getElementById("highlight-animation").style.backgroundColor = this.value;
});

// Tool Tip
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});
