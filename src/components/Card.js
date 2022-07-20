import React from 'react'
import styledCom from 'styled-components'

const Card = ({title, innerBackground, outerBackground}) => {


    return (
        <Wrapper img={outerBackground}>
            <InnerWrapper img={innerBackground}>
            <h1 style={{fontWeight:'400', opacity:'80%'}}>{title}</h1>
            </InnerWrapper>
        </Wrapper>
    )
};

export default Card;

//  Styled Components //

const Wrapper = styledCom.div`
filter: drop-shadow(0 5px 0.5rem pink);
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

`;

const InnerWrapper = styledCom.div`
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
`;