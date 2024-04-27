import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents/User/Documents";
import Dashboard from "./components/dashboard";
import Files from "./components/Documents/User/Files";
import CreateDoc from "./components/Documents/Admin/CreateDoc";
import CategoryDocuments from "./components/Documents/User/CategoryDocuments.";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/create" element={<CreateDoc />} />
      <Route path="/files" element={<Files />} />
      <Route path="/category/:categoryName" element={<CategoryDocuments />} />
    </Routes>
  );
}
export default App;