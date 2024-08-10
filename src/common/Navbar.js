import '../styles/header.css'
import logo from '../images/swami logo.png';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="https://swamieventmanagement.com" className="navbar-brand p-0">
                <img src={logo} alt="Logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <a href="https://swamieventmanagement.com" className="nav-item nav-link">Home</a>
                    <a href="https://swamieventmanagement.com/about.html" className="nav-item nav-link">About</a>
                    <Link to={'/allDomestic'} className='nav-item nav-link'>Domestic Tours</Link>
                    <Link to={'/allInternational'} className='nav-item nav-link'>International Tours</Link>
                    <Link to={'/specialTours'} className='nav-item nav-link'>Special Tours</Link>
                 
                    
                    <a href="https://swamieventmanagement.com/contact.html" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
