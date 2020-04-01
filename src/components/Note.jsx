import React from 'react'
import styled from 'styled-components';

import { COLORS } from '../commons/colors'

export function Note({id, title, text, date, color, isCompleted}) {
    const dateTransformed = new Date(date);
    return (
        <MainContainer>
            <MainHeader color={color} isCompleted={isCompleted}>
                <Title text={isCompleted ? 'line-through' : 'none'}> {title} </Title>
                {isCompleted && <Archive primary={COLORS.primary}>Make Actual</Archive>}
            </MainHeader>
            <DateStyled>  {dateTransformed.toLocaleString()} </DateStyled>
            <Text> {text}</Text>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    background-color: ${COLORS.stickyBackground};
    transition: all .3s ease;
    height: 150px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    overflow: hidden;
    &:hover {
        box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.5);

    }
        
`
const MainHeader = styled.div`
    padding: 7px 0;
    border-radius: 10px 10px 0 0 ;
    width: 100%;
    background-color: ${p => p.color};
    align-items: center;
    display: flex;
    justify-content: space-around;


`
const Title = styled.div`
    font-family: "Ubuntu", sans-serif;
    font-size: 23px;
    color: #fff;
    text-align: center;
    text-decoration: ${p => p.text};
`

const Text = styled.div`
    margin-top: 15px;
    font-family: 'Arial';
    color: black;
    text-align: center;
    padding: 0 10px;
    font-size: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

`
const DateStyled = styled.div`
    font-family: 'Arial';
    font-size: 12px;
    color: black;
    padding: 7px 0;
    line-height: 13px;
    border-bottom: 1px solid gray;
    margin: 0 10px;
`

const Archive = styled.button`
    font-family: Arial;
    font-size: 13px;
    padding: 5px; 
    border: 1px solid #fff;
    outline: none;
    cursor: pointer;
    background: transparent;
    color: #fff;
    transition: all .4s ease;
    &:hover {
        border-color: ${p => p.primary};
        color: ${p => p.primary};
    }
`

