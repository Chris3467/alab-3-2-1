const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const fireRoute = require("./routes/fire.js");
const waterRoute = require("./routes/water.js");
const grassRoute = require("./routes/grass.js");

app.set(`views`, `views`);
app.set(`view engine`, `ejs`);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`public`)); //handles static files like images

// middleware
app.use((req, res, next) => {
  console.log(`New request: ${req.method} ${req.url}`);
  next();
});

app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "grass.jpg"); // Path to the image file
  res.download(filePath, "grass.jpg", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Error downloading the file.");
    }
  });
});

app.use("/fire", fireRoute);
app.use("/water", waterRoute);
app.use("/grass", grassRoute);

app.listen(port, () => {
  console.log("I can hear you");
});
