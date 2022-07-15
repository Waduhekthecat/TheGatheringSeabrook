import * as React from 'react';
import styledCom from 'styled-components';
import Bg from '../imgs/formBg.jpg';
import '../App.css';

function Form() {
   
  return (
    <Wrapper>
    <FormContainer>
        <FormSection>
        <form>
            <h2>Contact</h2>
            <h3></h3>
            <FormGroup>
            <FormField id="name">
            <input type="text" placeholder="Name" onFocus="addBoxShadow(name)"></input>
            </FormField>
            <FormField id="email">
                <input type="email" placeholder="Email">
                    </input>
                    </FormField>
                    <FormField id="phone">
            <input type="text" placeholder="Phone"></input>
            </FormField>
            <FormField id="date">
            <input type="text" placeholder="Date"></input>
            </FormField>
            <FormField id="event">
            <input type="message" placeholder="Event Details"></input>
            </FormField>
            <FormField>
            <input type="submit" value="Send"></input>
            </FormField>
            </FormGroup>
        </form>
        </FormSection>
    </FormContainer>
    </Wrapper>
  );
}

export default Form;

// styled components //

const Wrapper = styledCom.div`
display: flex;
height:600px;
align-items: center;
justify-content: center;
background-color: #f0f0f0;
opacity:70%;
`;

const FormContainer = styledCom.div`
width: 500px;
height: 450px;
display:flex;
box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
`;

const FormSection = styledCom.div`
opacity:80%;
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
