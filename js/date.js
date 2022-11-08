// jshint esversion:6

// add parenthesis when you want to call it

// creating our own modules and require them
// and get their functionality exported out of
// the module to be used anywhere within
// our project.

exports.getDate = function () {
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  const today = new Date();
  const options = {
    weekday: "long",
  };

  return today.toLocaleDateString("en-US", options);
};
