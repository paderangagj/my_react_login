import { Link } from 'react-router-dom'

const Header = () => {

 return(

    <header> 
           <Link to="/"> </Link> 
           <Link to="/login"> Login </Link> 
           <Link to="/home"> Home </Link> 
           <Link to="/about"> About </Link> 
           <Link to="/contact"> Contact </Link> 
           <Link to="/blog"> Blog </Link> 
    </header> 

   )
  

}

export default Header;