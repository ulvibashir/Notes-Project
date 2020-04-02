import React from 'react';
import styled from 'styled-components'
import {COLORS} from '../commons/index'
export function DeleteModal(props) {
 
    return (
        <ModalWindow>
            <Header>Do you want to delete this note?</Header>
            <BtnContainer>
            <StyledBtn className="delete-btn" onClick={props.onDelete}>Delete</StyledBtn>
            <StyledBtn onClick={props.onCancel}>Cancel</StyledBtn>

            </BtnContainer>
        </ModalWindow>
    )
}

const ModalWindow = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    position: absolute;
    z-index:1;
    margin: 200px auto 0 auto;
    width: 400px;
    height: 250px;
    background: ${COLORS.headerBackground};
    padding: 10px 15px;
    ${'' /* border: 2px solid ${COLORS.primary}; */}
    box-shadow: 0 0 25px 0px rgba(0,0,0,.3);
`

const Header = styled.header`
    padding: 18px 6px;
    font-size:20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: ${COLORS.primary};
    border-bottom: 1px solid ${COLORS.primary}
`

const StyledBtn = styled.button`
    width: 120px;
    height: 40px;
    margin-bottom: 35px;
    outline: none;
    border: 1px solid ${COLORS.primary};
    border-radius: 4px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color:  ${COLORS.primary};
    cursor: pointer;
    transition: all .3s ease;
    background-color: ${COLORS.buttonBackground};

    &:hover {
    background-color: ${COLORS.primary};
    color: #fff;
  };
`


const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

`