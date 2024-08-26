import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Style/Style.css'
import Home from './Componets/Home/Home'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home></Home></StrictMode>,
)
