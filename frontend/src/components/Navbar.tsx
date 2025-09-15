import "./NavbarStyles.css"
import { Link } from "react-router-dom";

const  Navbar = () => {
    return (
       
        <nav className = 'bg-slate-800 shadow -lg flex items-center justify-around py3 px-32 fixed top-0 left-0 w-full'> 
            <Link to = "/">
                <span className = 'font-bold text-lg flex items-center gap-3 text-green-40'>
                     <span className = " font-bold text-2xl text-black" style={{color: 'black'}}>
                         Mineral Exploitation 
                     </span>
                     
                </span>

            </Link> 
            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '1.5rem'}}>
                <Link to = "/" style={{color: 'black',  padding: '1rem' }}> 
                   Home
               </Link>
               <Link to = "/about" style={{color: 'black',  padding: '1rem' }}> 
                   About
               </Link>
                <Link to = "/maps" style={{color: 'black',  padding: '1rem' }}>
                Maps
               </Link>
                <Link to = "/casestudies" style={{color: 'black',  padding: '1rem' }}> 
                   Case Studies
               </Link>
                <Link to = "/contacts" style={{color: 'black',  padding: '1rem' }}> 
                   Contacts
               </Link>



                
            </div> 

        </nav>
    )
}
export default Navbar;