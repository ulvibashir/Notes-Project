import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import {pen, archive} from '../styles/icons'
import { COLORS } from './colors'

export function Header() {
    return (
        <Container>
            <Logo>
                <h1>
                    Notes App
            </h1>
            </Logo>

            <div>
                <StyledNavLink
                    primary={COLORS.primaryColor}
                    additional={COLORS.additionalColor}
                    exact
                    to='/'
                >Actual</StyledNavLink>
                <StyledNavLink
                    primary={COLORS.primaryColor}
                    additional={COLORS.additionalColor}
                    to='/archive'>
                    <Icon>
                        <img src={archive} />
                    </Icon>

                    Archive</StyledNavLink>
                <StyledNavLink

                    primary={COLORS.primaryColor}
                    additional={COLORS.additionalColor}
                    to='/create'>
                    
                    <Icon>
                        <img src={pen}/>
                    </Icon>
                    Create
                    </StyledNavLink>
            </div>
        </Container>
    )
}


/*

*/
const Container = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    min-width: 1160px;
    height: 60px;
  
    background-color: #979998;
    div {
        display: flex;
        margin-right: 50px;
    }
`

const Logo = styled.div`
    margin-left: 50px;
`

const StyledNavLink = styled(NavLink)`
    
    color: white;
    text-decoration: none;
    font-family: 'Segoe UI';
    outline: none;
    transition: all .4s ease;
    margin: 0 25px;
    padding: 3px 12px;
    border: 2px solid transparent;
    border-radius: 5px;

    ${'' /* border: 2px solid ${props => props.primary}; */}
    &:hover{
        color: ${props => props.additional};

    }
    &.active{
        border-color: red;
    }

`

const Icon = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    text-align: center;
    margin: -8px 0;


    img {
        width: 50%;
    }
`
