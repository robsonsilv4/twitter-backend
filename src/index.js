const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb://robson:robson123@ds217360.mlab.com:17360/backend-robson",
  {
    useNewUrlParser: true
  }
);

// app.get("/", (req, res) => {
//   return res.send("Hello, World!");
// });

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());
app.use(require("./routes"));

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
