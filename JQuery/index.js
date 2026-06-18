$("h1").addClass("height");
$(document).keypress(function (event) {
    $("h1").text(event.key);
})