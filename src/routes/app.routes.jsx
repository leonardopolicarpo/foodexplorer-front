import { Routes, Route } from "react-router-dom";

import { useAuth } from '../hooks/auth';
import { Home } from '../pages/Home';
import { CreateRecipe } from '../pages/CreateRecipe'

export function AppRoutes(){
  const { user } = useAuth();
  const isAdmin = user && user.isAdmin === 1;
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {<Route path='/createRecipe' element={<CreateRecipe />} />}
    </Routes>
  )
}