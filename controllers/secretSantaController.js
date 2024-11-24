const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const { generateAssignmentsLogic } = require("../utils/assignmentLogic");

// In-memory storage for employees and assignments
let employees = [];
let lastYearAssignments = [];

// Parse Excel files and store data
const uploadEmployees = (req, res) => {
  try {
    const files = req.files;

    if (files.length !== 2) {
      return res
        .status(400)
        .json({ message: "Please upload exactly two files." });
    }
    files.forEach((file) => {
      const workbook = xlsx.readFile(file.path);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = xlsx.utils.sheet_to_json(sheet);
       if (file.originalname.includes("previous")) {
        lastYearAssignments = data;
      } else {
        employees = data;
      }

      // Delete the temporary file
      fs.unlinkSync(file.path);
    });

    res.status(200).json({ message: "Files uploaded successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error uploading files.", error: error.message });
  }
};

// Generate assignments
const generateAssignments = (req, res) => {
  try {
    if (!employees.length && !lastYearAssignments.length) {
      return res
        .status(400)
        .json({
          message: "Missing both employee and previous assignments data.",
        });
    }

    // Proceed even if one array is empty, as long as at least one has data
    const assignments = generateAssignmentsLogic(
      employees,
      lastYearAssignments
    );
    res.status(200).json(assignments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error generating assignments.", error: error.message });
  }
};


module.exports = { uploadEmployees, generateAssignments };
