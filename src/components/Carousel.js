import React, {useState, useEffect} from 'react';
import '../App.css';
import Carousel1 from '../imgs/carousel1.png';
import Carousel2 from '../imgs/carousel2.png';
import Carousel3 from '../imgs/carousel3.png';
import Logo from '../imgs/LogoOg.png';
import FB from '../imgs/facebook-icon.png';
import IG from '../imgs/instagram-icon.png';
import styledCom from 'styled-components';
import {device} from '../Device.js';

function Carousel() {
//   const [carouselImg, setCarouselImg] = useState(Carousel1);

//   function nextImg() {
//       carouselImg === Carousel1 ? setTimeout(()=>{setCarouselImg(Carousel2)},6000) : 
//       carouselImg === Carousel2 ? setTimeout(()=>{setCarouselImg(Carousel3)},6000) :
//       carouselImg === Carousel3 ? setTimeout(()=>{setCarouselImg(Carousel1)},6000) :
//       alert('carousel img slide error at nextImg()');
//   };
//   useEffect(() => {
//     nextImg();
//   }, [carouselImg]);

//   console.log([carouselImg]);

  return (
   <CarouselWrapper>
  <div class="fadein">
                <Img id="f3" src={Carousel3} style={{marginTop:'91px', display:'block', margin:'0 auto'}} alt=""/>
                <Img id="f2" src={Carousel1} style={{marginTop:'91px', display:'block', margin:'0 auto'}} alt=""/>
                <Img id="f1" src={Logo} style={{marginTop:'91px', display:'block', margin:'0 auto'}} alt=""/>
            </div>
             <Socials>
                <div style={{height:'50px', width:'90%', opacity:'.7', backgroundColor:'white'}}>
                 <a href="https://www.facebook.com/TheGatheringSeabrook"><Facebook src={FB} alt="fb"/></a>
                 <a href="https://www.instagram.com/thegatheringseabrook"><Instagram src={IG} alt="ig"/></a>
                 </div>
             </Socials>
    </CarouselWrapper>
  );
}

export default Carousel;

// styled components //

// need media query
const CarouselWrapper = styledCom.div`
text-align: start;
display:block;
position:relative;
height:425px;
width:80vw;
margin-left:10vw;
margin-right:10vw;

@media ${device.laptop} { 
    height: 500px;
  }

  @media ${device.laptopL} {
    height: 600px;
  }
`;

const Img = styledCom.img`
height:425px;
width:80vw;
@media ${device.laptop} { 
    height: 500px;
  }

  @media ${device.laptopL} {
    height: 600px;
  }
`;


const Socials = styledCom.div`
text-align:center;
position:absolute;
right:15vw;
bottom:-20px;
height:50px;
width:100px;
z-index:200;
}
`;

const Facebook = styledCom.img`
display: inline-block;
width:30px;
height:30px;
padding-right:5px;
transform: translate(0%);
transition: 0.3s ease-out;
    &:hover {
        transform: scale(1.2) translateY(-15%);
        filter: drop-shadow(0 0 0.1rem teal);
    }
    &:active {
        transform: scale(1.14) translateY(-5%);
    }
`;

const Instagram = styledCom.img`
display: inline-block;
width:30px;
height:30px;
z-index:200;
transition: 0.3s ease-out;
    &:hover {
        transform: scale(1.2) translateY(-15%);
        filter: drop-shadow(0 0 0.1rem crimson);
    }
    &:active {
        transform: scale(1.14) translateY(-5%);
    }
`;

