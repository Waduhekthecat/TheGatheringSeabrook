import * as React from 'react';
import '../App.css';
import Calendar from '../imgs/calendar.jpg';
import styledCom from 'styled-components';

function CalendarPage() {
  return (
    <Wrapper className="App">
        <Img src={Calendar} alt="" />
      </Wrapper>
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
padding-top:10vh;
height:70vh;
width:70vw;
border-radius:10px;
filter: drop-shadow(2px 5px .5rem gray);

@media (max-width: 785px) {
  height:50vh;
  width:80vw;
  }

`;