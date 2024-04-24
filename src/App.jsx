import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents";
import Dashboard from "./components/dashboard";
import Files from "./components/Files";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/files" element={<Files />} />
    </Routes>
  );
}
export default App;
