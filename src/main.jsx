// Import React library and ReactDOM for rendering
import React from 'react'
import ReactDOM from 'react-dom/client'
// Import the main App component
import App from './App.jsx'
// Import global CSS styles including Tailwind CSS
import './index.css'

/**
 * Application Entry Point
 * This file is responsible for mounting the React application to the DOM
 * It finds the element with id 'root' in index.html and renders the App component there
 */

// Create root element and render the App component wrapped in StrictMode
// StrictMode helps identify potential problems in the application during development
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
