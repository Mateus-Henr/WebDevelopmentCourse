// This is an example of mudle export.
// A created module can be required for code usage elsewhere.

// console.log(module);

// module.exports = "Hello World";
// module.exports = getDate; // Notice that we don't use parenthesis because we don't wanna call the function.

// We can specify the export in order to have multiple exports in a same file.

exports.getDate = function()
{
  const today = new Date();

  const options =
  {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function()
{
  const today = new Date();

  const options =
  {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);
};
