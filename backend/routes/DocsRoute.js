import express from "express";
import { Doc } from "../models/DocModel.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = express.Router();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve files from the "backend/uploads" directory
app.use(
  "http://localhost:5005/uploads",
  express.static(path.join(__dirname, "uploads"))
);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Route for Save a new Document
router.post("/", upload.single("pdf"), async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const { path } = req.file;

    // Create a new document instance with the file path
    const doc = new Doc({
      title,
      description,
      path,
      category,
    });

    // Save the document to the database
    await doc.save();

    res.json({ message: "Document uploaded successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route for Get All Documents from database
router.get("/", async (request, response) => {
  try {
    const docs = await Doc.find({});

    return response.status(200).json({
      count: docs.length,
      data: docs,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Document from database by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const doc = await Doc.findById(id);

    return response.status(200).json(doc);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Document
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.description ||
      !request.body.category
    ) {
      return response.status(400).send({
        message: "Send all required fields: title, description, category",
      });
    }

    const { id } = request.params;

    const result = await Doc.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Document not found" });
    }

    return response
      .status(200)
      .send({ message: "Document updated successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a document
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Doc.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: "Document not found" });
    }

    return response
      .status(200)
      .send({ message: "Document deleted successfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
