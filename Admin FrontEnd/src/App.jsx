import CustomForm from "./components/CustomForm/CustomForm"
import Details from "./components/CustomForm/Details"
import FinalCustomForm from "./components/CustomForm/FinalCustomForm"
import EditFinalCustomForm from "./components/CustomForm/EditFinalCustomForm"
import Index from "./components/CustomForm/Index"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/customforms" element={<Index />}></Route>
          <Route path="/customforms/:id" element={<Details />}></Route>
          <Route path="/customforms/edit/:id" element={<EditFinalCustomForm />}></Route>
          <Route path="/customforms/add" element={<FinalCustomForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App