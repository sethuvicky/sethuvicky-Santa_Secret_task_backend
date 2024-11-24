# Secret Santa Generator - Backend

This is the backend service for the Secret Santa Generator application. It provides APIs to handle file uploads, process employee data, and generate Secret Santa assignments while ensuring no one gets assigned the same person as last year.

## Features

- **File Processing**: Handles uploads and parsing of:
  - Employee List CSV/Excel files
  - Previous Year's Secret Santa Assignment files
- **Assignment Generation**: Implements algorithm to generate random Secret Santa assignments with constraints
- **Validation**: Ensures data integrity and proper file formats
- **RESTful APIs**: Provides endpoints for the frontend to interact with

## Tech Stack

- Node.js
- Express.js
- MongoDB (for storing assignment history)
- Multer (for file upload handling)
- XLSX/CSV Parser libraries

## Prerequisites

Before running the backend, ensure you have the following installed:
- Node.js (version 14.x or higher)
- MongoDB (version 4.x or higher)
- npm (package manager)

## Getting Started

Follow these steps to set up the backend server locally.

###  Clone the Repository

```bash
git clone https://github.com/sethuvicky/sethuvicky-Santa_Secret_task_backend.git
```

###  Install Dependencies

Navigate to the project directory and install required packages:

```bash
cd sethuvicky-Santa_Secret_task_backend
npm install
```

### Run the Server

Start the server with:
```bash
npm start
```

The server will run on `http://localhost:8000`

 
