import React, { useState } from "react";
import '../App.css';
import styledCom from 'styled-components';
import Logo from '../imgs/logo-no-bg.png';
import Background from '../imgs/wood-texture.jpg';
import { Link } from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        listStyle: 'none',
        textDecoration: 'none'
    };
    const [showModal, setShowModal] = useState(false);
    const [isHide, setIsHide] = useState(false);
    const toggleModal = () =>
        setShowModal(!showModal);
    const _onHideMenu = () => {
        setIsHide(!isHide)
    };

    return (
        <div>
            <Navbar>
                <ul className="nav-links">
                    <NavLink>
                        <Link style={navStyle} to='/'>
                            <li style={{ color: 'gray' }}>Home</li>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link style={navStyle} to='/About'>
                            <li style={{ color: 'gray' }}>About</li>
                        </Link>
                    </NavLink>

                    <Link to='/'>
                        <NavLogo src={Logo} alt="The Gathering" />
                    </Link>

                    <NavLink>
                        <Link style={navStyle} to='/Calendar'>
                            <li style={{ color: 'gray' }}>Calendar</li>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link style={navStyle} to='/Booking'>
                            <li style={{ color: 'gray' }}>Booking</li>
                        </Link>
                    </NavLink>
                </ul>
            </Navbar>
        </div>
    );
}

export default Nav;

// styled components //

const Navbar = styledCom.nav`
max-height:100px;
top: 0px;
position: relative;
background-color: white;
z-index: 15;
width: 100%;
border-bottom: double white;
`;

const NavLink = styledCom.div`
width:120px;
text-align: center;

&:active {
    transform: scale(0.9);
}
`;

const NavLogo = styledCom.img`
width: 250px;
height: 75px;
&:active {
    transform: scale(0.9);
}
;`

