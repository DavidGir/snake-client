const net = require("net");

const config = {
  port: 50541,
  host: "165.227.47.243 "
};

// establishes a connection with the game server
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

console.log("Connecting ...");
connect();


module.exports = { connect };


// const net = require('net');



// const connection = net.createConnection(config);

// // set the encoding on the connection to interpret binary as text:
// connection.setEncoding("utf-8");

// // send message to server:
// connection.write("Hello from client");


// set the encoding on stdin:
// process.stdin.setEncoding("utf-8");

// // listen for things typed in terminal/ stdin:
// process.stdin.on("data", (data) => {
//   // data = data.trim();

//   // if (data === "a") {
//   //   connection.write("move: left");
//   // }
//   //send the data to the server:
//   connection.write(data);

// });