import React, {useState} from 'react';
import './Navbar.css';
import logo from './Images/logo.png';
import CartModal from './CartModal';
import { FaBars, FaTimes } from 'react-icons/fa';

// In this case, i don't make use of the Routes and Links, because the exercise dont have any other section.

const Navbar = ({cartNavbar, totalNavbar}) => {

    // Responsive navbar with hamburguer button
    // Use the state to handle the navbar in mobile
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <div className="navbarContainer">
            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>

            <div>
            <img className="navbar-logo" src={logo} alt="MS Logo"></img>
            <div className="cartMobile" onClick={closeMobileMenu}><CartModal  cart={cartNavbar} total={parseFloat(totalNavbar).toFixed(2)}/></div>
            
            </div>

            <div className="itemsNavbar">
                <ul className={click ? 'nav-menu activeMobile' : 'nav-menu'}>
                    <li onClick={closeMobileMenu}><a className="nav-item" href="#">Home</a></li>
                    <li onClick={closeMobileMenu}><a className="nav-item"href="#">Browse</a></li>
                    
                    {/* Passing the props to the CartModal component. Also parsing the data into float and fixed the number with a 2 precision*/}
                    <li className="nav-item cartDesktop" onClick={closeMobileMenu}><CartModal  cart={cartNavbar} total={parseFloat(totalNavbar).toFixed(2)}/></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
