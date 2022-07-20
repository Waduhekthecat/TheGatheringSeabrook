import * as React from 'react';
import styledCom from 'styled-components';
import '../App.css';

function Form() {
   
  return (
    <Wrapper>
    <FormContainer>
        <FormSection>
        <form>
            <h1>Contact</h1>
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
            <input type="message" placeholder="Message"></input>
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
height:70vh;
align-items: center;
justify-content: center;
background-color: #f0f0f0;
opacity:70%;
`;

const FormContainer = styledCom.div`
margin-bottom:10%;
width: 600px;
height: 450px;
display:flex;
box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
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
opacity:60%;
font-family: "candara-light";
font-size:16px;
`;
