from fastapi import FastAPI, UploadFile, Body, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import OpenAIEmbeddings
from langchain_community.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
import os
import subprocess
import importlib
from tempfile import NamedTemporaryFile
import pdfplumber
import shutil
import docx2txt

from docx import Document



# Load environment variables (assuming you have a .env file)
from dotenv import load_dotenv

load_dotenv()

CHROMA_PATH = os.environ.get("CHROMA_PATH", "chroma")  # Use default if not set
PROMPT_TEMPLATE = """
Answer the question based only on the following context:

{context}

---

Answer the question based on the above context and do not even like reply in a way that is understanding the context: {question}
"""

# Define a model for the query text
class Query(BaseModel):
    query_text: str

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Chroma and OpenAI embeddings (consider handling potential errors during initialization)
embedding_function = OpenAIEmbeddings()
db = Chroma(persist_directory=CHROMA_PATH, embedding_function=embedding_function)
model = ChatOpenAI()

@app.post("/ask")
async def ask_question(query: Query = Body(...)):
    # Search Chroma for similar documents
    results = db.similarity_search_with_relevance_scores(query.query_text, k=3)

    # Check if a good match is found
    if not results or results[0][1] < 0.7:
        raise HTTPException(status_code=404, detail="not Found")

    # Extract context from retrieved documents
    context_text = "\n\n---\n\n".join([doc.page_content for doc, _score in results])

    # Generate prompt using the template
    prompt_template = ChatPromptTemplate.from_template(PROMPT_TEMPLATE)
    prompt = prompt_template.format(context=context_text, question=query.query_text)

    # Use ChatOpenAI to generate response (consider handling potential errors during prediction)
    try:
        response_text = model.predict(prompt)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating response: {str(e)}")

    # Extract source information
    sources = [doc.metadata.get("source", None) for doc, _score in results]

    # Format and return the response
    return {
        "response": response_text,
        "sources": sources,
    }

@app.post("/import-database")
async def import_database():
    try:
        subprocess.run(["python3", "create_database.py"])
        return {"message": "Database imported successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error importing database: {str(e)}")
    
from tempfile import NamedTemporaryFile
import os
import shutil

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # Check if the file is a Markdown document (.md extension)
    if not file.filename.endswith(".md"):
        # Check if the file is a PDF, DOCX, or DOC
        if file.filename.endswith((".pdf", ".docx", ".doc")):
            # Convert the file to Markdown
            converted_file_path = os.path.join("./data/books", file.filename.replace(file.filename.split(".")[-1], "md"))
            if file.filename.endswith(".pdf"):
                convert_pdf_to_md(file.file, converted_file_path)
            elif file.filename.endswith(".docx"):
                convert_docx_to_md(file.file, converted_file_path)
            elif file.filename.endswith(".doc"):
                convert_doc_to_md(file.file, converted_file_path)

            return {"message": "File converted and uploaded successfully"}

        raise HTTPException(status_code=400, detail="Only Markdown documents (.md), PDF, DOCX, and DOC files are allowed")

    # Check if the destination folder exists, create it if not
    destination_folder = "./data/books"
    if not os.path.exists(destination_folder):
        os.makedirs(destination_folder)

    # Save the uploaded file to the destination folder
    file_path = os.path.join(destination_folder, file.filename)
    with open(file_path, "wb") as destination:
        for chunk in file.file:
            destination.write(chunk)

    return {"message": "File uploaded successfully"}

def convert_pdf_to_md(pdf_file, md_path):
    # Use the pdfplumber library to convert PDF to Markdown
    with pdfplumber.open(pdf_file) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text()

    with open(md_path, "w", encoding="utf-8") as file:
        file.write(text)

def convert_docx_to_md(docx_file, md_path):
    # Use a library like python-docx2txt to convert DOCX to Markdown
    text = docx2txt.process(docx_file)

    with open(md_path, "w", encoding="utf-8") as file:
        file.write(text)

def convert_doc_to_md(doc_file, md_path):
    # Use a library like python-docx to convert DOC to Markdown
    doc = Document(doc_file)
    text = "\n".join([p.text for p in doc.paragraphs])

    with open(md_path, "w", encoding="utf-8") as file:
        file.write(text)








BOOKS_DIR = "data/books"

@app.get("/documents")
async def get_documents():
    try:
        # Get the list of files in the books directory
        file_names = os.listdir(BOOKS_DIR)
        
        # Remove the .md extension from the file names
        file_names = [name.replace(".md", "") for name in file_names]
        
        # Return the file names as a list
        return file_names
    
    except FileNotFoundError:
        # Handle the case where the BOOKS_DIR does not exist
        raise HTTPException(status_code=404, detail=f"Directory '{BOOKS_DIR}' not found.")
    
    except OSError as e:
        # Handle other OS-related errors
        raise HTTPException(status_code=500, detail=f"Error accessing documents: {str(e)}")