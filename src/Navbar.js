import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo-container">
                <img src={require('./images/logo.jpg')} className="logo"></img>
            </div>
            <div className="links">
                <Link to="/" className='link'>Home</Link>
                <Link to="/cameras" className='link'>Cameras</Link>
            </div>
        </div>
    )
}

export default Navbar;