import Home from '../pages/Home';
import About from '../pages/About';
import Consultants from '../pages/Consultants';
import Contact from '../pages/Contact';
import Department from '../pages/Department';
import Login from '../pages/Login';
import Services from '../pages/Services';
import DepartmentDesc from './DepartmentDesc';
import { Route,Routes } from 'react-router-dom';

import React from 'react'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/consultants' element={<Consultants/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/department' element={<Department/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path="/department_desc/:id" element={<DepartmentDesc/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default Router