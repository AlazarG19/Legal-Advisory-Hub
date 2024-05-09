import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents/User/Documents";
import Dashboard from "./components/dashboard";
import Files from "./components/Documents/User/Files";
import CategoryDocuments from "./components/Documents/Admin/CategoryDocuments.";
import Home from "./components/Documents/User/Home";
import UpdateDocument from "./components/Documents/Admin/UpdateDocument";
import DeleteDoc from "./components/Documents/Admin/DeleteDoc";
import CreateDoc from "./components/Documents/Admin/CreateDoc";
import ReadPdfPage from "./components/Documents/User/ReadPdfPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/create" element={<CreateDoc />} />
      <Route path="/files" element={<Files />} />
      <Route path="/card" element={<Home />} />
      <Route path="/read-pdf/:id" element={<ReadPdfPage />} />
      <Route path="/category/:categoryName" element={<CategoryDocuments />} />
      <Route path="/docs/edit/:id" element={<UpdateDocument />} />
      <Route path="/docs/delete/:id" element={<DeleteDoc />} />
    </Routes>
  );
}
export default App;
