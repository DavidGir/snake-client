const net = require("net");

const config = {
  port: 50541,
  host: "165.227.47.243 "
};

// Callback function that establishes a connection with the game server:
const connect = function() {
  const conn = net.createConnection(config);
  // interpret incoming data as text
  conn.setEncoding("utf8");
  // Get a print when connection is successfully made:
  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
  });
  // send message to server our three initials:
  conn.write("Name: DAV");
  // listen for incoming data:
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });
  return conn;
};

// Callback function that establishes movement commands with the server:
const commands = function() {
  const conn = net.createConnection(config);
  // If we send more tha one move message:
  // conn.write("Move: up");
  // conn.write("Move: down");
  // If we send more than one move with delay:
  // setTimeout(() => conn.write("Move: up"), 50);
  // setTimeout(() => conn.write("Move: down"), 100);
  // Gets out the game server frame:
  // setInterval(() => conn.write("Move: up"), 50);
};

console.log("Connecting ...");
// connect();
commands();


module.exports = { connect };