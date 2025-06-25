require("dotenv").config(); // Fix: correct dotenv usage

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/files", express.static("files"));

// Database connection

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection error:", err));


// PDF Schema
require("./pdfdetails");
const Pdfschema = mongoose.model("pdfDetails");

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Routes
app.get("/", (req, res) => {
  res.send("Success!!!!");
});

app.get("/get-files", async (req, res) => {
  try {
    const data = await Pdfschema.find({});
    res.send({ status: "super", data });
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ status: "error", message: "Failed to fetch files" });
  }
});

app.post("/upload-files", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ status: "error", message: "No file uploaded" });
    }

    const { title } = req.body;
    const fileName = req.file.filename;

    await Pdfschema.create({ title, pdf: fileName });
    res.send({ status: "okk" });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ status: "error", message: "File upload failed" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
