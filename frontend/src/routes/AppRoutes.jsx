import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRegister from '../pages/UserRegister';
import UserLogin from '../pages/UserLogin';
import FoodPartnerLogin from '../pages/FoodPartnerLogin';
import FoodPartnerRegister from '../pages/FoodPartnerRegister';
import HomePage from '../pages/HomePage';

function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/user/register' element={<UserRegister />} />
            <Route path='/user/login' element={<UserLogin />} />
            <Route path='/food-partner/register' element={<FoodPartnerRegister />} />
            <Route path='/food-partner/login' element={<FoodPartnerLogin />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes;