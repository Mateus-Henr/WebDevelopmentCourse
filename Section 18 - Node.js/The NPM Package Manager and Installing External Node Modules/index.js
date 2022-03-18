/*  NPM (Node Package Manager)
  This is a package manager used for accessing external modules, in other words, modules that everybody can create.
  It's interesting to use a package manager in order to get incorporate code with a specific objects more easily.
  It already comes with Node.js.

  Using NPM
  We can initialise NPM, a package file, by using "npm init". So then it'll ask for some information.

  Installing a Package
  To install a package you can head over to the NPM website and follow the instructions of the desired module.
  After the installation, a folder called "node_modules" will get created.
  Also, a "dependency" will be added to the "packeage.json". It's basically saying that the project DEPENDS on that module in order to work.
*/

// Including the package.
const superheroes = require('superheroes');

console.log(superheroes.random());


// Challenge
const supervillains = require('supervillains');

console.log(supervillains.random());
