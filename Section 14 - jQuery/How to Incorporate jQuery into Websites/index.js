/*  Installing jQuery
  Just like Bootstrap you can either download all of its files or incorporate them all through a CDN (Computer Download Network).
  The advantages of using CDN is far greater than having the user download all the files every time she/he accesses your website.
*/

// The code above is used to check whether the jQuery library has been loaded. We need to use it when including the CDN in the "head" tag.
$(document).ready(() => $("h1").css("color", "red"));

// But if the script is included at the end of the "body" tag, we can simply use:
$("h1").css("color", "red");
