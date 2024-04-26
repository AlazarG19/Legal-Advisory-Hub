import { Routes, Route } from "react-router-dom";
import Documents from "./components/Documents/User/Documents";
import Dashboard from "./components/dashboard";
import Files from "./components/Documents/User/Files";

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
