import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductScreen from '../pages/ProductScreen'
import Ventas from '../pages/Ventas'
import {Usuarios} from '../pages/Usuarios'
import { LayoutComponent } from '../Components/Layout'

const AppRouter = () => {
  return (
    <BrowserRouter>
     <LayoutComponent>
     <Routes>
        <Route path="/"  element={<ProductScreen/>}/>
        <Route path="/ventas"  element={<Ventas/>}/>
        <Route path="/usuarios"  element={<Usuarios/>}/>
      </Routes>
     </LayoutComponent>
    </BrowserRouter>
  )
}

export default AppRouter
