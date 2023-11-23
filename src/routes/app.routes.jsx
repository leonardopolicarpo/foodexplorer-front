import { Routes, Route } from "react-router-dom";

import { Home } from '../pages/Home';
import { CreateRecipe } from '../pages/CreateRecipe'

export function AppRoutes(){
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/createRecipe' element={<CreateRecipe />} />
    </Routes>
  )
}