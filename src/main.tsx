import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import ProviderContext from './contexts/ProviderContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ProviderContext>
        <App />
      </ProviderContext>
    </BrowserRouter>
  </StrictMode>
)
