import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
`
const Logo = styled(Link)`
    margin: auto;
    padding: 1em 0;
    img {
        width: 100px;
    }
`
const NavItems = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
`
const NavItem = styled.li`
    padding: 1rem 2rem;
    font-size: 1.6rem;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    color: #333;
    &:hover, &:focus {
      background: #ccc;
      color: black;
      span {
        color: black; 
      }
    }
`

const Header = () => (
  <HeaderWrapper>
      <Logo to="/">
        <img src={logo} alt="Fully Firm"/>
    </Logo>
      <nav role="navigation">
          <NavItems>
            <NavItem>
                <Link to="/about">
                    ABOUT
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/recipes">
                    RECIPES
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/lab">
                    THE LAB
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/places">
                    PLACES
                </Link>
            </NavItem>
            <NavItem>
                <Link to="/store">
                    STORE
                </Link>
            </NavItem>
          </NavItems>
      </nav>
  </HeaderWrapper>
)

export default Header
