import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto bg-base-200'>
        <RouterProvider router={Routes} />
      </div>
    </HelmetProvider>
  </StrictMode>,
)
