import Header from './Header'
import Footer from './Footer'
//import Content from './Content'

import { Outlet } from 'react-router-dom'


// const RootLayout = ({ children }) =>{
  const RootLayout = ( ) =>{
    return(
        <div className="root-main">
          
          <Header></Header>  
          
            
            <Outlet />
          <Footer></Footer>
          
        </div>
    )
}

export default RootLayout
