import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Contact from './pages/Contact.jsx'
import Investor from './pages/investor.jsx'
import Services from './pages/Services.jsx'
const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />
  },
  {
    path : "/contact",
    element : <Contact />
  },
  {
    path : "/investors",
    element : <Investor />
  },
  {
    path : "/services",
    element : <Services />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
