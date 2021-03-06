import React, { useState } from "react";
import styled from "styled-components";

import { Container } from '../commons/Container';
import { COLORS } from '../commons/colors';


export function Form({
  initial = {},
  isEdit,
  onSubmit }) {

  const [fields, setFields] = useState({
    title: '',
    text: '',
    color: '',
    ...initial
  })

  const validate = () => {
    return fields.title && fields.text
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  const getRandomColor = () => {
    let colors = [];
    for( let key in COLORS ) {
      if(key.includes('radio')){
        colors.push(COLORS[key]);
      }
    }
    return colors[getRandom(0, colors.length - 1)];
  }

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFields(fields => ({
      ...fields,
      [name]: value
    }))
  }

  const onSubmitBtnClick = (e) => {
    e.preventDefault();
    
    if (validate()) {
      onSubmit({
        title: fields.title,
        text: fields.text,
        color: fields.color || getRandomColor()
      })
    }

  }


  return (
    <Container>
      <FormContainer onSubmit={onSubmitBtnClick}>
        <Header>{isEdit ? 'Edit Note' : 'Create Note'}</Header>
        <TextInput
          name="title"
          type="text"
          placeholder="Title"
          primary={COLORS.primary}
          value={fields.title}
          onChange={onChangeHandler}
        />
        <TextArea
          name="text"
          placeholder="Note text"
          value={fields.text}
          onChange={onChangeHandler} />

        <ColorContainer>
          <ColorLabel>Color: </ColorLabel>
          <Label color={COLORS.radio1}>
            <RadioBtn
              name="color"
              type="radio"
              value={COLORS.radio1}
              checked={fields.color === COLORS.radio1}
              onChange={onChangeHandler}
            />
            <RadioSpan color={COLORS.radio1}></RadioSpan>
          </Label>
          <Label color={COLORS.radio2}>
            <RadioBtn
              type="radio"
              name="color"
              value={COLORS.radio2}
              checked={fields.color === COLORS.radio2}
              onChange={onChangeHandler}
            />
            <RadioSpan color={COLORS.radio2}></RadioSpan>
          </Label>
          <Label color={COLORS.radio3}>
            <RadioBtn
              type="radio"
              name="color"
              value={COLORS.radio3}
              checked={fields.color === COLORS.radio3}
              onChange={onChangeHandler} />
            <RadioSpan color={COLORS.radio3}></RadioSpan>
          </Label>
          <Label color={COLORS.radio4}>
            <RadioBtn
              type="radio"
              name="color"
              value={COLORS.radio4}
              checked={fields.color === COLORS.radio4}
              onChange={onChangeHandler}
            />
            <RadioSpan color={COLORS.radio4}></RadioSpan>
          </Label>
        </ColorContainer>


        <Button>{isEdit ? 'SAVE' : 'CREATE'}</Button>



      </FormContainer>
    </Container>

  );
}

const FormContainer = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: auto;
  padding: 15px 25px;
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.5);
  border-radius: 10px;

`;

const Header = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 40px;
  width: 100%;
  text-align: center;
  font-weight: bold;
  color: ${COLORS.headerColor};
`;
const TextInput = styled.input`
  margin-top: 20px;
  padding: 8px;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 5px;
  outline: none;  
  font-size: 18px;
  transition: all .4s ease;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);
  &:focus {
    border-color: ${COLORS.borderOnFocus};
    box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.5);
  }
`;

const TextArea = styled.textarea`
  margin-top: 20px;
  padding: 8px;
  height: 140px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgrey;
  outline: none;  
  resize: none;
  transition: all .4s ease;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);
  &:focus {
    border-color: ${COLORS.borderOnFocus};
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

`;

const RadioBtn = styled.input`

  display: none;
  &:checked + ${RadioSpan} {
    border-color: white;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.5);
  }

`;

const Button = styled.button`
  margin: 20px 0;
  width: 100%;
  height: 40px;
  outline: none;
  border: 1.3px solid ${p =>COLORS.primary};
  background-color: #fff;
  border-radius: 7px;
  cursor: pointer;
  font-size: 17px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: ${p =>COLORS.primary};
  transition: .4s all;

  &:hover {
    background: ${p =>COLORS.primary};
    border-color: ${p =>COLORS.primary};
    color:  white;
  }
`;
