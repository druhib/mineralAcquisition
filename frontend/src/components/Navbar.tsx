
import { Link } from "react-router-dom";

const  Navbar = () => {
    return (
       
        // <nav className = 'navbar' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 2rem'}}> 
        <nav className = 'navbar'>
            <Link to = "/">
             
                <span style={{color: 'black'}}>
                    Mineral Acquisition  
                </span>
                
    
            </Link> 
            <div className="navbar-links" style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '1rem'}}>
             
                <Link to = "/" style={{color: 'black',  padding: '1rem' }}> 
                   Home
               </Link>
               <Link to = "/about" style={{color: 'black',  padding: '1rem' }}> 
                   Tool Overview
               </Link>
                {/* <Link to = "/maps" style={{color: 'black',  padding: '1rem' }}>
                Maps
               </Link> */}
                {/* <Link to = "/casestudies" style={{color: 'black',  padding: '1rem' }}> 
                   Case Studies
               </Link> */}
                <Link to = "/contacts" style={{color: 'black',  padding: '1rem' }}> 
                     Contacts
               </Link>



                
            </div> 

        </nav>

        // <div className="inner">

		// 					<nav className="navbar">
		// 						<a href="/" className="navbar-brand">
		// 							Mineral Exploitation
		// 						</a>
								
		// 						<div className="navbar-links">
		// 							<a href="/">Home</a>
		// 							<a href="/about">About</a>
		// 							<a href="/maps">Maps</a>
		// 							<a href="/casestudies">Case Studies</a>
		// 							<a href="/contacts">Contacts</a>
		// 						</div>
		// 					</nav>

        //                 </div>
    )
}
export default Navbar;