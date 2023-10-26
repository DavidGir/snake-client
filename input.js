const { connect } = require("./client");
const net = require("net");


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
  if (key === "w") {
    // console.log("Move: up");
    connection.write("Move: up");
  }
  if (key === "s") {
    // console.log("Move: down");
    connection.write("Move: down");
  }
  if (key === "d") {
    // console.log("Move: right");
    connection.write("Move: right");
  }
  if (key === "a") {
    // console.log("Move: left");
    connection.write("Move: left");
  }
};

// setupInput();

module.exports = { setupInput };