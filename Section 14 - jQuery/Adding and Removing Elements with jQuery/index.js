/*  Adding elements based on a specific target
  There are methods, as shown below, that allow us to decide a specific place to place a new element.
*/

// Adding an element before a specific element
$("h1").before("<button>New</button>");

// Adding an element after a specific element
$("h1").after("<button>New</button>");

// Adding an element inside of a specific element (just after the opening tag)
$("h1").prepend("<button>New</button>");

// Adding an element inside of a specific element (just before the closing tag)
$("h1").append("<button>New</button>");

// Removing elements
$("button").remove();
