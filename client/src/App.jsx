import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login';
import SignUp from './SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>  
      <Routes>  
      <Route path="/register" element={<SignUp />} />
      <Route path="/login" element={<Login/>} />
      </Routes> 
    </BrowserRouter>
  )
}
export default App
