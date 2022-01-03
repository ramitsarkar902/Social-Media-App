const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const multer = require("multer");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Mongodb connected");
  }
);

const API_URL = "/api/"; //for the api url call

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post("api/upload", upload.single("file"), async (req, res) => {
  try {
    return res.status(200).json("File uploaded!");
  } catch (error) {
    res.status(500).json(error);
  }
});

app.use(`${API_URL}users`, userRoute);
app.use(`${API_URL}auth`, authRoute);
app.use(`${API_URL}posts`, postRoute);

app.listen(`${process.env.PORT}`, () => {
  console.log("Server Running");
});
