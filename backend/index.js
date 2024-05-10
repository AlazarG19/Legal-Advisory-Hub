import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Doc } from "./models/DocModel.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// Serve files from the "backend/uploads" directory

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// Routes for Documents
app.post("/Docs", upload.single("pdf"), async (req, res) => {
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

    await doc.save();

    res.json({ message: "Document uploaded successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//----------------------------------------------------------------
app.get("/Docs", async (request, response) => {
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
//----------------------------------------------------------------
app.get("/Docs/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const doc = await Doc.findById(id);

    return response.status(200).json(doc);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
//----------------------------------------------------------------
app.put("/Docs/:id", async (request, response) => {
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

//----------------------------------------------------------------
app.delete("/Docs/:id", async (request, response) => {
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
//----------------------------------------------------------------
app.get("/get-files", async (req, res) => {
  try {
    Doc.find({}).then((data) => {
      res.send({ status: "ok", data: data });
    });
  } catch (error) {}
});
//----------------------------------------------------------------

//----------------------------------------------------------------

//----------------------------------------------------------------
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("LAH");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
