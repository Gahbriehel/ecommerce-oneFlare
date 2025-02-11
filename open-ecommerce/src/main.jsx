import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/css/index.css'
import { Theme } from '@radix-ui/themes'
import './components/css/fonts.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>,
)
