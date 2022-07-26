import * as React from 'react';
import '../App.css';
import styledCom from 'styled-components';
import { PopupWidget } from "react-calendly";


function CalendarPage() {
  
  return (
    <div>
    <Wrapper className="App">
        <Calendar2 title="Events" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23dfdfdf&ctz=America%2FChicago&showTz=0&showCalendars=0&showPrint=0&showTabs=0&showTitle=0&src=aGVtbWM5YTk2cjE4ZnRwZG9qdXAzbG0zOGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB" frameborder="0" scrolling="no" />
      </Wrapper>
      <PopupWidget
        url="https://calendly.com/tatsujoestar"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#7382ec"
      />
      </div>
  );
}

export default CalendarPage;

// styled components //

const Wrapper = styledCom.div`
background-color:#D3D3D3;
height:90vh;
opacity:0.8;
`;

const Img = styledCom.img`
height:90vh;
width:70vw;
border-radius:10px;
filter: drop-shadow(2px 5px .5rem gray);

@media (max-width: 785px) {
  height:50vh;
  width:80vw;
  }

`;

const Calendar2 = styledCom.iframe`
margin-top:5vh;
height:75vh;
width:75vw;
border-radius:10px;
font-size:25px;
filter: drop-shadow(2px 5px .5rem gray);

@media (max-width: 785px) {
  height:50vh;
  width:80vw;
  }

`;