import React from "react";
import styled from "styled-components";

import { Container } from '../../commons/Container';
import { COLORS } from '../../commons/colors';
export function Create(props) {
  return (
    <Container>

      <Form onSubmit={onsubmit}>
        <Header>Fill data</Header>
          <TextInput type="text" placeholder="Title" primary={COLORS.primary} />
          <TextArea placeholder="Note text" />
          <ColorContainer>
            <ColorLabel>Color: </ColorLabel>
            <Label color="#d32727">
              <RadioBtn type="radio" name="color" />
              <RadioSpan color="#d32727"></RadioSpan>
            </Label>
            <Label color="#3a2c84">
              <RadioBtn type="radio" name="color" />
              <RadioSpan color="#3a2c84"></RadioSpan>
            </Label>
            <Label color="#ef8e0b">
              <RadioBtn type="radio" name="color" />
              <RadioSpan color="#ef8e0b"></RadioSpan>
            </Label>
            <Label color="#516f55">
              <RadioBtn type="radio" name="color" />
              <RadioSpan color="#516f55"></RadioSpan>
            </Label>
          </ColorContainer>
          <Button>CREATE</Button>
      </Form>
    </Container>

  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: auto;
  padding: 15px 25px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  border-radius: 10px;
`;

const Header = styled.div`
  font-family: "Segoe UI";
  font-size: 40px;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;
const TextInput = styled.input`
  margin-top: 20px;
  padding: 8px;
  width: 100%;
  border: none;
  border-radius: 5px;
  outline: none;  
  font-size: 18px;
  transition: all .4s ease;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);
  &:focus {
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.5);
  }
`;

const TextArea = styled.textarea`
  margin-top: 20px;
  padding: 8px;
  height: 140px;
  width: 100%;
  border-radius: 5px;
  border: none;
  outline: none;  
  resize: none;
  transition: all .4s ease;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);
  &:focus {
    border-color: grey;
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.5);
  }
`;




const ColorContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 50px;
`;

const ColorLabel = styled.label`

  font-size: 20px;
  font-family: "Segoe UI";
  position: relative;
  top: -3px;
`;

const Label = styled.label`
  ${'' /* background-color: ${p => p.color};
  display: block;
  transition: all .4s;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  cursor: pointer; */}
`;
const RadioSpan = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${p => p.color};
  border: 7px inset transparent;
  transition: all 0.3s ease;
  cursor: pointer;

  
${'' /* 
  display: block;
  position: relative;
  border: 1px solid transparent;
  width: 25px;
  height: 25px;
  left: 0;
  border-radius: 100%;
  transition: all 0.3s; */}
`;

const RadioBtn = styled.input`

  display: none;
  &:checked + ${RadioSpan} {
    border-color: white;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);
  }

  ${'' /* &:checked + ${RadioSpan} {
    &::after {
      content: "";
      display: block;
      width: 22px;
      height: 22px;
      border-radius: 100%;
      border: 3px solid white;
      top: -10%;
      left: -9%;
      position: absolute;
      transition: all 0.3s;
    }
  } */}
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid grey;
  background-color: #fff;
  border-radius: 7px;
  cursor: pointer;
  font-size: 18px;
  color: grey;
  transition: .4s all;

  &:hover {
    border-color: black;
    color: black;
  }
`;
