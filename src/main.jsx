import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/user/App.jsx'
import Category from './components/category/Category.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Category />
  </React.StrictMode>,
)
