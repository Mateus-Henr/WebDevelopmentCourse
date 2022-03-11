const ZERO = 0;
const ONE = 1;
const FIVE = 5;

// Adding a "click" event listener
$("h1").click(() => $("h1").css("color", "purple"));

// Adding an event listener to multiple HTML elements at once
// JS version
for (var i = ZERO; i < FIVE; i++)
{
  document.querySelectorAll("button")[i].addEventListener("click", () => {
    document.querySelector("h1").style.color = "purple";
  });
}

// jQuery version
$("button").click(() => $("h1").css("color", "purple"));


// Detecting keytrokes in a input box
$("input").keypress((e) => console.log("Key pressed in the input box was: " + e.key));

// Listening to keystrokes in the entire document
$(document).keypress((e) => console.log("Key pressed in the entire document was: " + e.key));


// Challenge
$("input").keyup((e) => {

  var keyPressed = e.key;
  var h1Text = $("h1").text();

  if (keyPressed === "Backspace")
  {
      $("h1").text(h1Text.substring(ZERO, h1Text.length - ONE));
  }
  else
  {
    $("h1").text(h1Text + keyPressed);
  }
});

// The ".on()" method allows us to use any JS events. This "on()" method allows us to add more events at the same time.
$("h1").on("mouseover", () => $("h1").css("color", "purple"));
