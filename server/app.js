import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { Server } from "socket.io";

// Load environment variables
dotenv.config();

// Create Express app and HTTP server
const app = express();
const server = createServer(app);

// Create Socket.IO server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  standardHeaders: true, // Enable the `RateLimit-*` headers
  handler: (req, res) => {
    res
      .status(429)
      .json({ message: "Too many requests, please try again later." });
  },
});

app.use(limiter);

// this is the event emited when a client connects to the server
const ROOM = "group";

io.on("connection", (socket) => {
  console.log("a user joined", socket.id);

    //here we show weather user has joined the group
    socket.on("JoinRoom", async (userName)=>{

        console.log(`${userName} has joined the room`)

        await socket.join(ROOM)


    })

});

export default server;
