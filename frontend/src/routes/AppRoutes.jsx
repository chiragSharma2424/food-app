import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserRegister from '../pages/UserRegister';
import UserLogin from '../pages/UserLogin';

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/user/register' element={<UserRegister />} />
            <Route path='/user/login' element={<UserLogin />} />
            <Route path='/food-partner/register' element={<h1>Food partner register</h1>} />
            <Route path='/food-partner/login' element={<h1>Food partner login</h1>} />
        </Routes>
    </Router>
  )
}

export default AppRoutes;