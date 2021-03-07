import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import {
  Button,
  ButtonContainer,
  FormContainer,
  Input,
  Item,
  Label,
  Select,
  SelectOptions,
  Title,
} from './style';

const Form = () => {
  return (
    <div>
      <Container>
        <FormContainer>
          <Title>Datos personales</Title>
          <Row>
            <Col sm={12} md={4}>
              <Item>
                <Label>Nombres</Label>
                <Input type='text' placeholder='Digite ambos nombres' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Apellidos</Label>
                <Input type='text' placeholder='Digite ambos apellidos' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Genero</Label>
                <Select>
                  <SelectOptions disabled selected>
                    Seleccione su genero
                  </SelectOptions>
                  <SelectOptions>Masculino</SelectOptions>
                  <SelectOptions>Femenino</SelectOptions>
                </Select>
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Lugar de nacimiento</Label>
                <Input
                  type='text'
                  placeholder='Digite su lugar de nacimiento'
                />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Fecha de nacimiento</Label>
                <Input type='date' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Nacionalidad</Label>
                <Input type='text' placeholder='Digite su nacionalidad' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Numero de DUI</Label>
                <Input type='text' placeholder='Digite su numero de DUI' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Numero de NIT</Label>
                <Input type='text' placeholder=' Digite su numero de NIT' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Estado civil</Label>
                <Select>
                  <SelectOptions disabled selected>
                    Seleccione su estado civil
                  </SelectOptions>
                  <SelectOptions>Soltería</SelectOptions>
                  <SelectOptions>Matrimonio</SelectOptions>
                  <SelectOptions>Divorcio</SelectOptions>
                  <SelectOptions>Viudo o Viuda</SelectOptions>
                </Select>
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>País</Label>
                <Input type='text' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Municipio</Label>
                <Input type='text' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Departamento</Label>
                <Select>
                  <SelectOptions disabled selected>
                    Seleccione su departamento
                  </SelectOptions>
                  <SelectOptions>Ahuachapán</SelectOptions>
                  <SelectOptions>Santa Ana</SelectOptions>
                  <SelectOptions>Sonsonate</SelectOptions>
                  <SelectOptions>La Libertad</SelectOptions>
                  <SelectOptions>Chalatenango</SelectOptions>
                  <SelectOptions>Cuscatlán</SelectOptions>
                  <SelectOptions>San Salvador</SelectOptions>
                  <SelectOptions>La Paz</SelectOptions>
                  <SelectOptions>Cabañas</SelectOptions>
                  <SelectOptions>San Vicente</SelectOptions>
                  <SelectOptions>Usulután</SelectOptions>
                  <SelectOptions>San Miguel</SelectOptions>
                  <SelectOptions>Morazán</SelectOptions>
                  <SelectOptions>La Unión</SelectOptions>
                </Select>
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Numero de teléfono fijo</Label>
                <Input type='text' placeholder='Digite su numero fijo' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Numero de teléfono movil</Label>
                <Input type='text' placeholder='Digite su numero celular' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Correo Electrónico</Label>
                <Input type='text' placeholder='Digite su correo electrónico' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Profesión u Oficio</Label>
                <Input type='text' placeholder='Digite su rol laboral' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Alergias</Label>
                <Input
                  type='text'
                  placeholder='Digite alguna alergia que padezca'
                />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Tipo de sangre</Label>
                <Select>
                  <SelectOptions disabled selected>
                    Seleccione su tipo de sangre
                  </SelectOptions>
                  <SelectOptions>Soltería</SelectOptions>
                  <SelectOptions>Matrimonio</SelectOptions>
                  <SelectOptions>Divorcio</SelectOptions>
                  <SelectOptions>Viudo o Viuda</SelectOptions>
                </Select>
              </Item>
            </Col>

            <Col sm={12} md={12}>
              <Item>
                <Label>Lugar de residencia</Label>
                <Input type='text' placeholder='Digite su domicilio' />
              </Item>
            </Col>
          </Row>

          <Title>Datos sobre la iglesia</Title>
          <Row>
            <Col sm={12} md={4}>
              <Item>
                <Label>Departamento</Label>
                <Select>
                  <SelectOptions disabled selected>
                    Seleccione su departamento
                  </SelectOptions>
                  <SelectOptions>Ahuachapán</SelectOptions>
                  <SelectOptions>Santa Ana</SelectOptions>
                  <SelectOptions>Sonsonate</SelectOptions>
                  <SelectOptions>La Libertad</SelectOptions>
                  <SelectOptions>Chalatenango</SelectOptions>
                  <SelectOptions>Cuscatlán</SelectOptions>
                  <SelectOptions>San Salvador</SelectOptions>
                  <SelectOptions>La Paz</SelectOptions>
                  <SelectOptions>Cabañas</SelectOptions>
                  <SelectOptions>San Vicente</SelectOptions>
                  <SelectOptions>Usulután</SelectOptions>
                  <SelectOptions>San Miguel</SelectOptions>
                  <SelectOptions>Morazán</SelectOptions>
                  <SelectOptions>La Unión</SelectOptions>
                </Select>
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Municipio</Label>
                <Input type='text' placeholder='Digite su municipio' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>País</Label>
                <Input type='text' placeholder='Digite su país' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Distrito</Label>
                <Select>
                  <SelectOptions disabled selected>
                    Seleccione al distrito que pertenece
                  </SelectOptions>
                  <SelectOptions>Distrito #1</SelectOptions>
                  <SelectOptions>Distrito #2</SelectOptions>
                  <SelectOptions>Distrito #3</SelectOptions>
                  <SelectOptions>Distrito #4</SelectOptions>
                  <SelectOptions>Distrito #5</SelectOptions>
                  <SelectOptions>Distrito #6</SelectOptions>
                  <SelectOptions>Distrito #7</SelectOptions>
                  <SelectOptions>Distrito #8</SelectOptions>
                  <SelectOptions>Distrito #9</SelectOptions>
                </Select>
              </Item>
            </Col>

            {/* Select  distrito*/}
            <Col sm={12} md={4}>
              <Item>
                <Label>Iglesia del distrito</Label>
                <Select>
                  <SelectOptions disabled selected>
                    Seleccione la iglesia del distrito
                  </SelectOptions>
                  <SelectOptions>Distrito #1</SelectOptions>
                  <SelectOptions>Distrito #2</SelectOptions>
                  <SelectOptions>Distrito #3</SelectOptions>
                  <SelectOptions>Distrito #4</SelectOptions>
                  <SelectOptions>Distrito #5</SelectOptions>
                  <SelectOptions>Distrito #6</SelectOptions>
                  <SelectOptions>Distrito #7</SelectOptions>
                  <SelectOptions>Distrito #8</SelectOptions>
                  <SelectOptions>Distrito #9</SelectOptions>
                </Select>
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>RUMID</Label>
                <Input type='text' placeholder='Digite su rumid' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Categoría</Label>
                <Select>
                  <SelectOptions disabled selected>
                    Seleccione su categoría
                  </SelectOptions>
                  <SelectOptions>Miembro</SelectOptions>
                  <SelectOptions>Obrero</SelectOptions>
                  <SelectOptions>Diacono</SelectOptions>
                  <SelectOptions>Ministro</SelectOptions>
                </Select>
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Fecha de bautismo</Label>
                <Input type='date' />
              </Item>
            </Col>

            <Col sm={12} md={4}>
              <Item>
                <Label>Fecha de nombramiento</Label>
                <Input type='date' />
              </Item>
            </Col>

            <Col sm={12} md={6}>
              <Item>
                <Label>Ministros que realizo el bautismo</Label>
                <Input type='text' />
              </Item>
            </Col>

            <Col sm={12} md={6}>
              <Item>
                <Label>Colaborador</Label>
                <Input type='text' />
              </Item>
            </Col>

            <Col sm={12} md={6}>
              <Item>
                <Label>Ubicación de la iglesia</Label>
                <Input type='text' />
              </Item>
            </Col>

            <Col sm={12} md={6}>
              <Item>
                <Label>Cargos desempeñados</Label>
                <Input type='text' />
              </Item>
            </Col>
          </Row>

          <ButtonContainer>
            <Button>Registrar solicitud</Button>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </div>
  );
};

export default Form;
