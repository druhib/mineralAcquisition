import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App  from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

// const createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>

  );
} else {
  // Optionally handle the error (e.g., log or throw)
  console.error("Root element not found");
}