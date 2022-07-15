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
            <div>
                <img src={Logo} style={{height:'425px', width:'100vw'}} alt=""/>
            </div>
            {/* <div class="fadein">
                <img id="f3" src={Carousel3} style={{height:'425px', width:'100vw'}} alt=""/>
                <img id="f2" src={Carousel1} style={{height:'425px', width:'100vw'}} alt=""/>
                <img id="f1" src={Logo} style={{height:'425px', width:'100vw'}} alt=""/>
            </div> */}

             <Socials>
                 <a href="https://www.facebook.com/TheGatheringSeabrook"><Facebook src={FB} alt="fb"/></a>
                 <a href="https://www.instagram.com/thegatheringseabrook"><Instagram src={IG} alt="ig"/></a>
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
right:150px;
bottom:0px;
background-color: white;
opacity:70%;
height:40px;
width:100px;
z-index:100;
}
`;

const Facebook = styledCom.img`
display: inline-block;
width:30px;
height:30px;
padding:7px;
transform: translate(0%);
transition: 0.3s ease-out;
    &:hover {
        transform: scale(1.2) translateY(-15%);
        filter: drop-shadow(0 0 0.1rem teal);
        opacity:100%;
    }
    &:active {
        transform: scale(1.14) translateY(-5%);
    }
`;

const Instagram = styledCom.img`
display: inline-block;
width:30px;
height:30px;
padding:7px;
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

