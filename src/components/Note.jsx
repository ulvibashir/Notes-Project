import React from 'react'
import styled from 'styled-components';

import { COLORS } from '../commons/colors'

export function Note({id, title, text, date, color}) {
    const dateTransformed = new Date(date);
    return (
        <MainContainer>
            <MainHeader color={color}>
                <Title> {title} </Title>
            </MainHeader>
            <DateStyled>  {dateTransformed.toLocaleString()} </DateStyled>
            <Text> <article>{text}</article> </Text>
        </MainContainer>
    )
}

const MainContainer = styled.div`
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    background-color: ${COLORS.stickyBackground};
    height: 150px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    overflow: hidden;
    
`
const MainHeader = styled.div`
    padding: 7px 0;
    border-radius: 10px 10px 0 0 ;
    width: 100%;
    background-color: ${p => p.color};
    

`
const Title = styled.div`
    font-family: "Ubuntu", sans-serif;
    font-size: 23px;
    color: #fff;
    text-align: center;
`

const Text = styled.div`
    margin-top: 15px;
    font-family: 'Arial';
    color: black;
    text-align: center;
    padding: 0 10px;
    font-size: 18px;

`
const DateStyled = styled.div`
    font-family: 'Arial';
    font-size: 12px;
    color: black;
    padding: 7px;

`
