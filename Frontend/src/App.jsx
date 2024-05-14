import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents/Admin/Documents";
import Dashboard from "./components/dashboard";
import CategoryDocuments from "./components/Documents/Admin/CategoryDocuments.";
import Home from "./components/Documents/User/Home";
import UpdateDocument from "./components/Documents/Admin/UpdateDocument";
import DeleteDoc from "./components/Documents/Admin/DeleteDoc";
import CreateDoc from "./components/Documents/Admin/CreateDoc";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/create" element={<CreateDoc />} />
      <Route path="/card" element={<Home />} />
      <Route path="/category/:categoryName" element={<CategoryDocuments />} />
      <Route path="/docs/edit/:id" element={<UpdateDocument />} />
      <Route path="/docs/delete/:id" element={<DeleteDoc />} />
    </Routes>
  );
}
export default App;
