const express = require("express");
const cors = require("cors");

const getVideo = require("./controller/getVideo");
const getVideoList = require("./controller/getVideoList");
const uploadVideo = require("./controller/uploadVideo");

const app = express();
const port = 5000;
// Middleware => make sure incoming req.body is formatted as JSON
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is Express");
});

// Chaining routes
app
  .route("/videos")
  .get((req, res) => {
    res.json(getVideoList());
  })
  .post((req, res) => {
    res.json(uploadVideo(req.body));
  });

// Dynamic path using an id as a param
app.get("/videos/:id", (req, res) => {
  const vidId = req.params.id;
  res.json(getVideo(vidId));
});

app.get("/*", (req, res) => {
  res.send("<h1>Page not found</h1>");
});

app.listen(port, console.log("app is listening at:http://localhost:5000"));
