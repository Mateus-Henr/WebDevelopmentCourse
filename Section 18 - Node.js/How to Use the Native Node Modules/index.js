/*  Node Mudules
  Node JS has a lot of modules that we can mess around with.
  In order to use a module you have to require it.
*/

// File System module
const fs = require("fs"); // It cannot be changed.

// Copy one file to another. If the destination file already existed, the same would be overwritten.
fs.copyFileSync("file1.txt", "file2.txt");
