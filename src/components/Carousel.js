import React, {useState, useEffect} from 'react';
import '../App.css';
import Carousel1 from '../imgs/carousel1.png';
import Carousel2 from '../imgs/carousel2.png';
import Carousel3 from '../imgs/carousel3.png';
import Logo from '../imgs/LogoOg.png';
import FB from '../imgs/facebook-icon.png';
import IG from '../imgs/instagram-icon.png';
import styledCom from 'styled-components';

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
    <div className="carousel">
   <CarouselWrapper>
<div style={{display:'block', height:'425px', width:'80vw', margin:'0 auto'}}>
  <div class="fadein">
                <img id="f3" src={Carousel3} style={{marginTop:'86px', display:'block', height:'425px', width:'80vw', margin:'0 auto'}} alt=""/>
                <img id="f2" src={Carousel1} style={{marginTop:'86px', display:'block', height:'425px', width:'80vw', margin:'0 auto'}} alt=""/>
                <img id="f1" src={Logo} style={{marginTop:'86px', display:'block', height:'425px', width:'80vw', margin:'0 auto'}} alt=""/>
            </div>
            </div>
             <Socials>
                <div style={{height:'50px', width:'90%', opacity:'.7', backgroundColor:'white'}}>
                 <a href="https://www.facebook.com/TheGatheringSeabrook"><Facebook src={FB} alt="fb"/></a>
                 <a href="https://www.instagram.com/thegatheringseabrook"><Instagram src={IG} alt="ig"/></a>
                 </div>
             </Socials>
    </CarouselWrapper>
       </div>
  );
}

export default Carousel;

// styled components //


// need media query
const CarouselWrapper = styledCom.div`
position:relative;
height:425px;
width:100vw;
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

