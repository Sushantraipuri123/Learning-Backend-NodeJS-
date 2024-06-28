import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Layout from './Layout.jsx';
import Content from './components/Content.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App/>} />
          <Route path="content" element={<Content/>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
