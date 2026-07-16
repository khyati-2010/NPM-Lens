import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router.jsx'
import { RouterProvider } from 'react-router'
import RecSearchProvider from './context/RecSearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecSearchProvider>
      <RouterProvider router={router} />
    </RecSearchProvider>
  </StrictMode>,
)
