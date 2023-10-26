const { connect } = require("./client");
const net = require("net");
const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, cannedMessages } = require('./constants.js');


let connection;

// Callback to handle user input from stdin:
const setupInput = function(conn) {
  connection = conn;
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
  if (key === "\u0003") {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  // Additional code for sending canned messages:
  if (cannedMessages[key]) {
    connection.write(`Say: ${cannedMessages[key]}`);
  }
};

// setupInput();

module.exports = { setupInput };