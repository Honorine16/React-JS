import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, } from "react-router-dom";
import Registration from './Components/Pages/Registration/Registration.jsx';
import OtpCode from './Components/Pages/OTPCode/OtpCode.jsx';
import Dashboard from './Components/Pages/Dashboard/Dashboard.jsx';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/otp-code",
    element: <OtpCode />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
