import React from 'react'
import styledCom from 'styled-components'
import { Link } from 'react-router-dom';
import HostPage from '../pages/HostPage.js';
import AttendPage from '../pages/AttendPage.js';

const Card = ({title, innerBackground, outerBackground, linkTo}) => {

    return (
        <Wrapper img={outerBackground}>
            <StyledBtn>
            <InnerWrapper img={innerBackground} style={{marginLeft:'-5%'}}>
                    <h1 style={{cursor:'pointer', fontWeight:'400', opacity:'80%'}}>{title}</h1>
                </InnerWrapper>
            </StyledBtn>
        </Wrapper>
    )
};

export default Card;


{/* <Link style={{textDecoration:'none', color:'black'}} to={linkTo}>

</Link> */}

//  Styled Components //

const Wrapper = styledCom.div`
filter: drop-shadow(2px 5px .25rem gray);
border-radius:2px;
background-image: url(${props => props.img});
background-size: stretch;
background-repeat:no-repeat;
background-position: center;
height:250px;
width:150px;
line-height: 250px;
text-align:center;
align-items:center;
justify-content:center;
z-index:2000;
padding-left:30px;
padding-right:30px;
padding-top:50px;
padding-bottom:50px;
@media (max-width: 785px) {
    height:300px;
    line-height:300px;
    width:200px;
    }
`;

const InnerWrapper = styledCom.div`
filter: drop-shadow(0 5px 0.5rem white);
opacity:70%;
background-color:white;
border-radius:2px;
display:inline-block;
height:250px;
width:150px;
line-height: 250px;
text-align:center;
align-items:center;
justify-content:center;
z-index:3000;
&:hover {
    opacity: 0.75;
    transform: scale(1.05);
    border-radius:7px;
    filter: drop-shadow(0 5px 2rem white);

}
&:active {
    transform: scale(0.995);
}
`;

const StyledBtn = styledCom.button`
border:none;
background-color:transparent;

`;