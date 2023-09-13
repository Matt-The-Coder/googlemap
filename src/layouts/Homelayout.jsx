import Footer from './partials/Footer'
import Header from './partials/Header'
import { Outlet } from 'react-router-dom'
const Homelayout = () => {
 
 
 return(
    <div className='Homelayout'>
    <Header/>
  <Outlet/>
    <Footer/>
    </div>
 )

 
}

export default Homelayout;