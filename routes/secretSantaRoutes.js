const express = require("express");
const {
  uploadEmployees,
  generateAssignments,
} = require("../controllers/secretSantaController");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Temporary file storage

// Route to upload employees and previous year's assignments
router.post("/upload", upload.array("files", 2), uploadEmployees);

// Route to generate assignments
router.get("/generate", generateAssignments);

module.exports = router;
