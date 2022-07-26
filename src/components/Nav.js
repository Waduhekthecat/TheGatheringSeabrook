import React, { useState } from "react";
import '../App.css';
import styledCom from 'styled-components';
import Logo from '../imgs/logo-no-bg.png';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
  import Slide from '@mui/material/Slide';
  import menu from '../imgs/menu.png';

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Nav() {
    const navStyle = {
        color: 'white',
        listStyle: 'none',
        textDecoration: 'none'
    };
    const [open, setOpen] = useState(false);

    const handleDialog = () => {
      !open ? setOpen(true) : setOpen(false);
    };
    console.log('mobile menu opened: ', {open});


    return (
        <>
        <Wrapper>
        <Menu style={{cursor:'pointer'}}onClick={handleDialog}/>
        <NavLogo2 src={Logo} alt="The Gathering" />
            <Navbar>
               
                <ul class='nav-links'>
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
                            <li style={{ color: 'gray' }}>Events</li>
                        </Link>
                    </NavLink>
                    <NavLink>
                        <Link style={navStyle} to='/Booking'>
                            <li style={{ color: 'gray' }}>Contact</li>
                        </Link>
                    </NavLink>
                </ul>
            </Navbar>
        </Wrapper>

{/* dialog menu */}
<Dialog
fullScreen
open={open}
onClose={handleDialog}
TransitionComponent={Transition}
>
<AppBar sx={{ background:'gray', position: 'absolute', zIndex:'1', height:'100vh'}}>
  <Toolbar>
    <Typography sx={{ ml: 2, flex: 1, textAlign:'center' }} variant="h3" component="div">
    </Typography>
  </Toolbar>
</AppBar>
<ListContainer>
  <DialogUl>
      <DialogBtn>
        <DialogBtnTxt onClick={handleDialog}>
          <DialogBtnOuter>
            <DialogBtnInner>
              <Link style={{textDecoration:"none", color:'black'}} to="/">
                <span>Home</span>
              </Link>
            </DialogBtnInner>
          </DialogBtnOuter>
        </DialogBtnTxt>
      </DialogBtn>
      <DialogBtn>
        <DialogBtnTxt onClick={handleDialog}>
          <DialogBtnOuter>
            <DialogBtnInner>
              <Link style={{textDecoration:"none", color:'black'}} to="/About">
                <span>About</span>
              </Link>
            </DialogBtnInner>
          </DialogBtnOuter>
        </DialogBtnTxt>
      </DialogBtn>
      <DialogBtn>
        <DialogBtnTxt onClick={handleDialog}>
          <DialogBtnOuter>
            <DialogBtnInner>
              <Link style={{textDecoration:"none", color:'black'}} to="/Calendar">
                <span>Events</span>
              </Link>
            </DialogBtnInner>
          </DialogBtnOuter>
        </DialogBtnTxt>
      </DialogBtn>
      <DialogBtn>
        <DialogBtnTxt onClick={handleDialog}>
          <DialogBtnOuter>
            <DialogBtnInner>
              <Link style={{textDecoration:"none", color:'black'}} to="/Booking">
                <span>Contact</span>
              </Link>
            </DialogBtnInner>
          </DialogBtnOuter>
        </DialogBtnTxt>
      </DialogBtn>
      {/* <SocialLi>
        <SocialOuter>
          <SocialInner>
            <a href="https://www.facebook.com/bogiespub2/">
              <img src={facebook} alt=""/></a>
          </SocialInner>
        </SocialOuter>
      </SocialLi> */}
  </DialogUl>
  </ListContainer>
</Dialog>
</>
    );
}

export default Nav;

// styled components //

const Wrapper = styledCom.div`
width:100vw;
@media (max-width: 785px) {
    width:100vw;
    height:90px;
    }
`;

const Navbar = styledCom.nav`
display:block;
width: 80vw;
margin-left: 10vw;
margin-right: 10vw;
top: 0px;
background-color: white;
z-index: 300;
@media (max-width: 785px) {
    display:none;
    }
`;

const NavLink = styledCom.div`
margin-top:10px
width:120px;
text-align: center;
&:active {
    transform: scale(0.9);
}
`;

const NavLogo = styledCom.img`
margin-top:10px;
margin-left: auto;
margin-right: auto;
width: 250px;
height: 70px;
&:active {
    transform: scale(0.9);
}
;`

const NavLogo2 = styledCom.img`
display:none;
@media (max-width: 785px) {
  margin-top:20px;
    width: 230px;
    height: 70px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    }
;`


const ListContainer = styledCom.div`
background-color: #f0f0f0;
border: 0;
width: 100%;
margin: 0 auto;
font-size: 16px;
font-style: normal;
font-weight: 500;
color: #999999;
-webkit-text-size-adjust: 100%;
-webkit-tap-highlight-color: rgba(0,0,0,0);
transition-property: transform;
transition-duration: 500ms;
transition-timing-function: cubic-bezier(0.400,0.000,0.200,1.000);
z-index:200;
`;

const DialogUl = styledCom.ul`
align-text:center;
background-color: #f0f0f0;
position: relative;
display: block;
font-style: normal;
font-weight: 500;
color: #999999;
padding-top:20vh;
padding-bottom:20vh;
height: 100vh;
width: 100vw;
list-style: none;
align-items:center;
justify-content:center;
text-align: center;
font-family: "Quicksand",sans-serif;
font-size: 1em;
overflow: hidden;
overflow-wrap: break-word;
box-sizing: border-box;
transition-property: height;
transition-duration: 300ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
z-index:100;

`;

const DialogBtn = styledCom.li`
display: list-item;
text-align: -webkit-match-parent;
min-width: 1px;
font-size: 1em;
box-sizing: border-box;
align-items:center;
justify-content:center;
align-text:center;
background-color: #f0f0f0;
`;

const DialogBtnTxt = styledCom.button`
opacity: 1;
transform: translate(0, 0);
font-size: 2em;
background-color: #f0f0f0;
border: 0;
`;

// button background
const DialogBtnOuter = styledCom.div`
background-color: #f0f0f0;
padding-top: 0.5em;
    padding-right: 0.5em;
    padding-bottom: 0.5em;
    padding-left: 0.5em;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    display: flex;
    flex: 1 0 auto;
    position: relative;
    z-index: 2;
    height: 100%;
    border-radius: inherit;
    transform: translate3d(0, 0, 0);
    box-sizing: border-box;
    `;

    // button text
    const DialogBtnInner = styledCom.div`
    color:black;
    flex-shrink: 1;
    min-width: 1px;
    max-width: 100%;
    margin-left: 5px;
    margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    `;

// icon
const Menu = styledCom.img.attrs({
    src:menu, alt:'menu'
})`
color: #f0f0f0;
display:none;
position:absolute; 
margin-top:10px;
right:3%;
height:40px; 
width:40px;
&:hover {
      transform: scale(1.1);
    transition: 200ms ease-in;
}
&:active {
    transform: scale(1)
}
@media (max-width: 785px) {
    display:block;
    }
   
`;