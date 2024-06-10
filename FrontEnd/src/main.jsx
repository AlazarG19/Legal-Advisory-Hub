import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { Provider } from 'react-redux';
import store from "../src/redux/Store/index.js"
import Navbar from './components/Navbar.jsx';
ReactDOM.createRoot(document.getElementById('kt_app_root')).render(
  <Provider store={store}>

    <App />,
  </Provider>
)
