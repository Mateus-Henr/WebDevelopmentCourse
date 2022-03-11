// How to animate things

// Hide the selected element
$("button").click(() => $("h1").hide());

// Show the selected element
$("button").click(() => $("h1").show());

// Toggling its visibility
$("button").click(() => $("h1").toggle());

// Hide an element in a fading out way (it reduces the element's opacity until it dissapears)
$("button").click(() => $("h1").fadeOut());

// Make an element appear by increasing its opacity
$("button").click(() => $("h1").fadeIn());

// Toggling the fade out and fade in
$("button").click(() => $("h1").fadeToggle());

// Hide an element using a slide animation (collapses the element)
$("button").click(() => $("h1").slideUp());

// Show an element using a slide animation (uncollapses the element)
$("button").click(() => $("h1").slideDown());

// Toggling between the collapsion
$("button").click(() => $("h1").slideToggle());

// Making your own animations. This method only allows you to add CSS rules that have a numeric value. Therefore you cannot change colors and stuff like this.
// If you wanna use a percentage you have to use it as a string.
$("button").click(() => $("h1").animate(
  {
    opacity: 0.5
  }
));

// Chaining animations together
$("button").click(() => $("h1").slideUp().delay(100).slideDown().delay(100).animate({opacity: 0.5}));
