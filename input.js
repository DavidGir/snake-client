const net = require("net");

// Callback to handle user input from stdin:
const setupInput = function() {
  // Allows to listen to terminal input:
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // Handles when user inputs ctrl+c to kill connection:
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();

module.exports = { setupInput };