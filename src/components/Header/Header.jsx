import React, { useState } from 'react';
import { Link as LinkLogo } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

import {
  BurgerMenu,
  Link,
  Logo,
  Img,
  NavBarContainer,
  NavBarLi,
  NavBarUl,
  LogoContainer,
  NavBarUlContainer,
} from './style';

const Header = () => {
  const [Menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!Menu);
  };

  return (
    <NavBarContainer>
      <LogoContainer>
        <LinkLogo to='/'>
          <Logo>
            <Img src='https://i.imgur.com/dG9qfn7.png' alt='' />
          </Logo>
        </LinkLogo>

        <BurgerMenu onClick={handleMenu}>
          <AiOutlineMenu />
        </BurgerMenu>
      </LogoContainer>

      <NavBarUlContainer menu={Menu}>
        <NavBarUl>
          <NavBarLi>
            <Link to='/'>Inicio</Link>
          </NavBarLi>

          <NavBarLi>
            <Link to='/request'>Solicitud</Link>
          </NavBarLi>

          <NavBarLi>
            <Link to='/register'>Registrarse</Link>
          </NavBarLi>

          <NavBarLi>
            <Link to='/login'>Cerrar Sesión</Link>
          </NavBarLi>
        </NavBarUl>
      </NavBarUlContainer>
    </NavBarContainer>
  );
};

export default Header;
