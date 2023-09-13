import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './index.css'
import Homelayout from './layouts/Homelayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Notfound from './pages/Notfound'
import Drivemap from './pages/Map'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<Routes>
  <Route element={<Homelayout/>}>
       <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/map' element={<Drivemap/>}/>
  </Route>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
</BrowserRouter>
  </React.StrictMode>,
)
