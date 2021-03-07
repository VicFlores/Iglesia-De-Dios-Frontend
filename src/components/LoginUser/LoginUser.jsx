import React from 'react';
import {
  LoginContainer,
  LoginForm,
  Label,
  Item,
  Input,
  Figure,
  Img,
  Button,
} from './style';

const LoginUser = () => {
  return (
    <>
      <LoginContainer>
        <Figure>
          <Img src='https://i.imgur.com/XVW2XDT.jpg' />
        </Figure>

        <LoginForm>
          <Item>
            <Label>Correo Electrónico</Label>
            <Input placeholder='Digite su correo electrónico' />
          </Item>

          <Item>
            <Label>Contraseña</Label>
            <Input placeholder='Digite su contraseña' />
          </Item>

          <Item>
            <Button>Iniciar Sesión</Button>
          </Item>
        </LoginForm>
      </LoginContainer>
    </>
  );
};

export default LoginUser;
