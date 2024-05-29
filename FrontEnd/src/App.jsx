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
import AdminFinalCustomForm from './components/AdminCustomForm/AdminFinalCustomForm'
import AdminDetails from './components/AdminCustomForm/AdminDetails'
import AdminIndex from './components/AdminCustomForm/AdminIndex'
import CustomForm2 from './components/CustomForm/CustomForm2'
import AdminEditFinalCustomForm from './components/AdminCustomForm/AdminEditFinalCustomForm'
import Details from './components/CustomForm/Details'
import Index from './components/CustomForm/Index'
import CheckEmail from './components/Authentication/CheckEmail/CheckEmail'
import EmailVerified from './components/Authentication/VerifyEmail/EmailVerified'
import Documents from "./components/Documents/User/Documents";
import Home from "./components/Documents/User/Home";
import ReadPdfPage from "./components/Documents/User/ReadPdfPage";
import CategoryDocuments from "./components/Documents/Admin/CategoryDocuments.";
import UpdateDocument from "./components/Documents/Admin/UpdateDocument";
import DeleteDoc from "./components/Documents/Admin/DeleteDoc";
import Dashboard from './components/AdminDashboard'

import "./App.css"
import FreelancerSignup from './components/Authentication/FreelancerSignup'
import CompleteOffer from './components/Offer/CompleteOffer'
import CancelOffer from './components/Offer/CancelOffer'
import Routes from './Routes';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInForm />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/login" element={<SignInForm />}></Route>
          <Route path="/signup" element={<SignUpForm />}></Route>
          <Route path="/freelancersignup/:id" element={<FreelancerSignup />}></Route>
          <Route path="/userdetail/:id" element={<UserDetails />}></Route>
          <Route path="/legalexperts" element={<ProjectUserCardPane />}></Route>
          <Route path="/chat/:id" element={<ChatPage />}></Route>
          <Route path="/createOffer/:id" element={<CreateOffer />}></Route>
          <Route path="/cancelOffer/:id" element={<CancelOffer />}></Route>
          <Route path="/completeOffer/:id" element={<CompleteOffer />}></Route>
          <Route path="/acceptOffer/:id" element={<OfferComponent />}></Route>
          <Route path="/paymentPage/:id" element={<Payment />}></Route>
          <Route path="/multistep" element={<MultiStepForm />}></Route>
          <Route path="/freelancerProfile" element={<FreelancerProfile />}></Route>
          <Route path="/clients" element={<Clients />}></Route>
          {/* Custom Form Routes */}
          <Route path="/customform" element={<Index />}></Route>
          <Route path="/customform/:id" element={<Details />}></Route>
          <Route path="/customform/edit/:id" element={<CustomForm2 />}></Route>
          {/* <Route path="/customform/edit/:id" element={<CustomForm2 />}></Route> */}
          {/* End of Custom Form Routes */}

          <Route path="/checkemail/:type" element={<CheckEmail />}></Route>
          <Route path="/emailverified/:id/:token" element={<EmailVerified />}></Route>
          {/* Admin Custom Form Routes */}
          <Route path="/customforms" element={<AdminIndex />}></Route>
          <Route path="/customforms/:id" element={<AdminDetails />}></Route>
          <Route path="/customforms/edit/:id" element={<AdminEditFinalCustomForm />}></Route>
          <Route path="/customforms/add" element={<AdminFinalCustomForm />}></Route>
          {/* End Admin Custom Form Routes */}

          {/* document database */}

          <Route path="/docdb/documents" element={<Documents />} />
          <Route path="/docdb/card" element={<Home />} />
          <Route path="/docdb/read-pdf/:id" element={<ReadPdfPage />} />
          <Route path="/docdb/category/:categoryName" element={<CategoryDocuments />} />
          <Route path="/docdb/docs/edit/:id" element={<UpdateDocument />} />
          <Route path="/docdb/docs/delete/:id" element={<DeleteDoc />} />
          {/* end  document database */}
          {/* fekedes route */}

          <Routes />
          {/* end fekedes route */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
