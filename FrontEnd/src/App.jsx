import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import LoginPage from './components/Authentication/login'
import UserDetails from './components/Users/UserDetails'
import ProjectUserCardPane from './components/Users/ProjectUsersCardPane'
import ChatPage from './components/Chat/ChatPage'
import CreateOffer from './components/Offer/CreateOffer'
import OfferComponent from './components/Offer/OfferComponent'
import Payment from './components/Payment/Payment'
import MultiStepForm from './components/Offer/MultiStepForm'
import FreelancerProfile from './components/Users/freelancerProfile'
import Clients from './components/Users/Clients'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/userdetail/:id" element={<UserDetails />}></Route>
          <Route path="/users" element={<ProjectUserCardPane />}></Route>
          <Route path="/chat/:id" element={<ChatPage />}></Route>
          <Route path="/createOffer/:id" element={<CreateOffer />}></Route>
          <Route path="/acceptOffer/:id" element={<OfferComponent />}></Route>
          <Route path="/paymentPage/:id" element={<Payment />}></Route>
          <Route path="/multistep" element={<MultiStepForm />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/freelancerProfile" element={<FreelancerProfile/>}></Route>
          <Route path="/clients" element={<Clients />}></Route>

          

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

          // <Route path="/mycomponent" element={<MyComponent />}></Route>