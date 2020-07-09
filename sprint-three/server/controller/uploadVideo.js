const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Load data
const videos = JSON.parse(fs.readFileSync("./model/videos.json"));

// Function to save videos, read/write videos.json
const uploadVideo = (videoData) => {
  const video = {
    id: uuidv4(),
    title: videoData.title,
    description: videoData.description,
    image: videoData.image,
    timestamp: newDate(),
  };

  videos.push(video);

  fs.writeFileSync("./model/videos.json", JSON.stringify(videos));
  return videos;
};

module.exports = uploadVideo;
