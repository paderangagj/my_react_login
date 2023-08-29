
const Footer = () => {

    const today = new Date();
    

    return(
   
       <footer>
           <p> Copyright &copy;  {today.getFullYear()} Saudi Basic Industries Corporation (SABIC). All rights reserved. </p>
       </footer>
   
      )
     
   
   }
   
   export default Footer;