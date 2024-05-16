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
import SignInForm from './components/Authentication/SignInForm'
import SignUpForm from './components/Authentication/SignupForm'
import CustomForm2 from './components/CustomForm/CustomForm2'
import Details from './components/CustomForm/Details'
import Index from './components/CustomForm/Index'
import CheckEmail from './components/Authentication/CheckEmail/CheckEmail'
import EmailVerified from './components/Authentication/VerifyEmail/EmailVerified'
import "./App.css"
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInForm />}></Route>
          <Route path="/login" element={<SignInForm />}></Route>
          <Route path="/signup" element={<SignUpForm />}></Route>
          <Route path="/userdetail/:id" element={<UserDetails />}></Route>
          <Route path="/users" element={<ProjectUserCardPane />}></Route>
          <Route path="/chat/:id" element={<ChatPage />}></Route>
          <Route path="/createOffer/:id" element={<CreateOffer />}></Route>
          <Route path="/acceptOffer/:id" element={<OfferComponent />}></Route>
          <Route path="/paymentPage/:id" element={<Payment />}></Route>
          <Route path="/multistep" element={<MultiStepForm />}></Route>
          <Route path="/freelancerProfile" element={<FreelancerProfile />}></Route>
          <Route path="/clients" element={<Clients />}></Route>
          <Route path="/customform" element={<Index />}></Route>
          <Route path="/customform/:id" element={<Details />}></Route>
          <Route path="/customform/edit/:id" element={<CustomForm2 />}></Route>
          <Route path="/checkemail/:type" element={<CheckEmail />}></Route>
          <Route path="/emailverified/:id/:token" element={<EmailVerified />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App