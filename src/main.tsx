import { createRoot } from 'react-dom/client'
import './shadcn.css'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
Fix main.tsx root element
