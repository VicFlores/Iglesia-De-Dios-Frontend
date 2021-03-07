import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  FormContainer,
  Input,
  Label,
  Item,
  Title,
  Button,
  ButtonContainer,
} from './style';

const RegisterForm = () => {
  return (
    <>
      <Container>
        <FormContainer>
          <Title>Registro de usuario</Title>
          <Row>
            <Col sm={12} md={6}>
              <Item>
                <Label>Nombres</Label>
                <Input placeholder='Digite sus nombres' />
              </Item>
            </Col>

            <Col sm={12} md={6}>
              <Item>
                <Label>Apellidos</Label>
                <Input placeholder='Digite sus apellidos' />
              </Item>
            </Col>

            <Col sm={12} md={6}>
              <Item>
                <Label>Correo Electrónico</Label>
                <Input placeholder='Digite su correo' />
              </Item>
            </Col>

            <Col sm={12} md={6}>
              <Item>
                <Label>Contraseña</Label>
                <Input placeholder='Digite su contraseña' />
              </Item>
            </Col>
          </Row>
          <ButtonContainer>
            <Button>Registrar Usuario</Button>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </>
  );
};

export default RegisterForm;
