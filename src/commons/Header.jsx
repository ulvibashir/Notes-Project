import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { pen, archive, actual } from "../styles/icons";
import { COLORS } from "./colors";

export function Header() {
  return (
    <Container>
      <Logo>
        <h1>Notes App</h1>
      </Logo>

      <div>
        <StyledNavLink
          border={COLORS.primary}
          exact
          to="/"
        >
        <Icon>
            <img src={actual} />
          </Icon>
          Actual
        </StyledNavLink>
        <StyledNavLink
          border={COLORS.primary}
          to="/archive"
        >
          <Icon>
            <img src={archive} />
          </Icon>
          Archive
        </StyledNavLink>
        <StyledNavLink
          border={COLORS.primary}
          to="/create"
        >
          <Icon>
            <img src={pen} />
          </Icon>
          Create
        </StyledNavLink>
      </div>
    </Container>
  );

}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 1160px;
  height: 60px;

  background-color: ${COLORS.headerBackground};
  div {
    display: flex;
    margin-right: 50px;
  }
`;

const Logo = styled.div`
  margin-left: 50px;
  font-family: "Ubuntu", sans-serif;
  font-size: 17px;
  color: ${COLORS.primary};
`;

const StyledNavLink = styled(NavLink)`
  color: ${p => p.border};
  text-decoration: none;
  font-family: "Segoe UI";
  outline: none;
  transition: all 0.4s ease;
  margin: 0 25px;
  padding: 5px 15px;
  border: 2px solid ${p => p.border};
  border-radius: 15px;

  &.active {
    background-color: ${p => p.border};
    color: #fff;
  };

  &:hover {
    ${'' /* IDK */}
  }
`;



const Icon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  text-align: center;
  margin: -8px 5px;

  img {
    width: 50%;
  }
`;
