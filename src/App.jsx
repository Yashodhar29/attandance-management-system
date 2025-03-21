import React from 'react'
import Login from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        {/* Redirect invalid URLs to 404 page */} 
      </Routes>
    </BrowserRouter>
  )
}

export default App