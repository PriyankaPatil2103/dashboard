import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyOffcanvas from './MyOffcanvas'
import Dashboard from './component/Dashboard'
import Addfood from './component/Addfood'
import Allfood from './component/Allfood'
import Orders from './component/Orders'
import Customerlist from './component/Customerlist'


function MyRoutes() {
  return (
    <div>
        <Router>
            <MyOffcanvas/>
            <Routes>
                <Route path='/' element={<Dashboard/>}></Route>
                <Route path='/Addfood' element={<Addfood/>}></Route>
                <Route path='/Allfood' element={<Allfood/>}></Route>
                <Route path='/Orders' element={<Orders/>}></Route>
                <Route path='/Customerlist' element={<Customerlist/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default MyRoutes