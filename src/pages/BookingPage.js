import * as React from 'react';
import styledCom from 'styled-components';
import Form from '../components/Form.js';
import '../App.css';

function BookingPage() {
  return(
    <div style={{marginTop:'91px'}}class="App">
    <Form />
    </div>
  );
}

export default BookingPage;

// styled components //


const Wrapper = styledCom.div`
display: flex;
height:600px;
background-color: #D3D3D3;
align-items: center;
justify-content: center;
`;

const FormContainer = styledCom.div`

width: 800px;
height: 450px;
display:flex;
box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
`;

// background-image: url(${Bg});
const DivBg = styledCom.div`
background-repeat: no-repeat;
background-size: cover;
background-position-y: 80%;
height:100%;
width:100%;
`;

const FormSection = styledCom.div`

background-color: white;
height:100%;
width:100%;
`;

const FormGroup = styledCom.div`
display:flex;
flex-direction:column;
`;

const FormField = styledCom.div`
margin: 5px 15px;
align-items:center;
border-radius:5px;
padding: 10px 15px;
`;
