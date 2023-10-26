const net = require("net");
const { IP, PORT } = require("./constants");

// Callback function that establishes a connection with the game server:
const connect = function() {
  const conn = net.createConnection({ IP, PORT });
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

module.exports = { connect };