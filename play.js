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

  // listen for incoming data:
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });
  return conn;
};

console.log("Connecting ...");
connect();

