const dotenv = require("dotenv"); // require dotenv package for access env varible form .env file
const http = require("http"); // require http to reate raw http server
const app = require("./app"); // require app server from app.js
const connectDB = require("./src/config/db");  // require connectdb to connect database to sever from .sr/condig/db
const { initializeSocket } = require("./src/socket/socket"); // initalizSocket fun for real time chat 

dotenv.config(); // to use dotenv file

connectDB(); //use connectdb to perfom action to creat conectio b/w serbver to database

const PORT = process.env.PORT || 5000;  // a varible for port

const server = http.createServer(app); // create http server with app express servewr





initializeSocket(server); // use soket io for real time chat

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`); // start server at 5000
});