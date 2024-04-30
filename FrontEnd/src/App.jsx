import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProjectUsersCardPane from './components/ProjectUsersCardPane'
import UserDetails from './components/UserDetails'
import ChatPage from './components/ChatPage'
import CreateOffer from './components/CreateOffer'
import OfferComponent from './components/OfferComponent'
import Payment from './components/Payment'
import MyComponent from './components/MyComponent'
import MultiStepForm from './components/MultiStepForm'
import LoginPage from './components/login'
import FreelancerProfile from './components/freelancerProfile'
import Clients from './components/Clients'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/create" element={<CreateUser/>}></Route>
          <Route path="/update/:id" element={<UpdateUser/>}></Route>
          <Route path="/userdetail/:id" element={<UserDetails/>}></Route>
          <Route path="/users" element={<ProjectUsersCardPane/>}></Route>
          <Route path="/chat/:id" element={<ChatPage />}></Route>
          <Route path="/createOffer/:id" element={<CreateOffer />}></Route>
          <Route path="/acceptOffer/:id" element={<OfferComponent />}></Route>
          <Route path="/paymentPage/:id" element={<Payment />}></Route>
          <Route path="/mycomponent" element={<MyComponent />}></Route>
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
