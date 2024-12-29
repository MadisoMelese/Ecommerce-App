import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider'


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <BrowserRouter>
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>

  </StrictMode>,
)
