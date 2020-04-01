import React from "react";
import styled from "styled-components";

export function Create(props) {
  return (
    <Container>
      <Header>Fill data</Header>
      <StyledForm onSubmit={onsubmit}>
        <StyledInput type="text" placeholder="Title" />
        <StyledTextArea placeholder="Note text" />
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
      </StyledForm>
      <Button>CREATE</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 500px;
  margin: 40px auto;
`;
const Header = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 40px;
  width: 100%;
  text-align: center;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 20px;
`;
const StyledInput = styled.input`
  margin: 12px 0;
  padding: 6px 8px;
  width: 100%;
  border: 1px solid  #545252;
  outline: none;  
  &:focus {
    border-color: grey;
  }
`;
const StyledTextArea = styled.textarea`
  margin: 12px 0;
  padding: 6px 8px;
  height: 140px;
  width: 100%;
  border-radius: 8px;
  border-color: #545252;
  outline: none;  
  &:focus {
    border-color: grey;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
  align-self: flex-start;
`;
const ColorLabel = styled.label`
  font-size: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  top: -3px;
`;

const Label = styled.label`
  margin: 0 5px;
  background-color: ${p => p.color};
  display: block;
  transition: all 0.8s;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  transition: all 0.3s;
  cursor: pointer;
`;
const RadioSpan = styled.span`
  display: block;
  position: relative;
  border: 1px solid transparent;
  width: 25px;
  height: 25px;
  left: 0;
  border-radius: 100%;
  transition: all 0.3s;
`;

const RadioBtn = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${RadioSpan} {
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
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #545252;
  background-color: #fff;
  border-radius: 7px;
  cursor: pointer;
  font-size: 18px;
  color: #545252;
  transition: 0.3s all;

  &:hover {
    border-color: grey;
    color: grey;
  }
`;
