import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

//* Navbar

export const NavBarContainer = styled.nav`
  background: #f7f7f7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

//* Logo

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 25px;
`;

export const Logo = styled.figure`
  margin: 0 0 0 20px;
  text-align: center;

  @media screen and (max-width: 900px) {
    margin: 0;
  }
`;

export const Img = styled.img`
  width: 200px;
`;

//* Navigation

export const NavBarUlContainer = styled.div`
  @media screen and (max-width: 900px) {
    display: ${(props) => (props.menu ? 'flex' : 'none')};
    background-color: rgba(98, 210, 162, 0.9);
    margin-top: 20px;
  }
`;

export const NavBarUl = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  @media screen and (max-width: 900px) {
    margin: 20px 0;
    text-align: center;
  }
`;

export const NavBarLi = styled.li`
  display: inline-block;
  margin: 0 16px;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;

  &:hover {
    border-top: 2px solid #fc8621;
  }

  @media screen and (max-width: 900px) {
    display: block;
    transition: none;
    padding: 15px;
    margin: 0;
    border-top: none;

    &:hover {
      border-top: none;
    }
  }
`;

export const Link = styled(LinkRouter)`
  color: #272343;
  height: 100%;
  text-decoration: none;
  width: 100%;
  text-transform: uppercase;
  font-size: 15px;

  &:hover {
    text-decoration: none;
  }
`;

//* Burger menu

export const BurgerMenu = styled.button`
  cursor: pointer;
  border: 0;
  font-size: 25px;
  display: none;
  margin: 0;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;
