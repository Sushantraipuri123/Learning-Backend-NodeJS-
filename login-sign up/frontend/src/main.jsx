import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" >
          <Route index element={<App />} />
          <Route path="signup" element={<Signup/>} />
          <Route path="login" element={<Login/>} />
          <Route path="admin" element={<h1>This is admin page</h1>} />
          </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
