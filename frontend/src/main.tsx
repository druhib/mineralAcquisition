import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App  from './App.tsx'

// const createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    
      <App />
    
  );
} else {
  // Optionally handle the error (e.g., log or throw)
  console.error("Root element not found");
}