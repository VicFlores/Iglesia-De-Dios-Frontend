import React from 'react';
import { TableContainer, Thead, Th, Td, Tr } from './style';

const Dashboard = () => {
  return (
    <TableContainer>
      <table>
        <Thead>
          <tr>
            <Th>#</Th>
            <Th>Nombres</Th>
            <Th>Apellidos</Th>
            <Th>Categoría</Th>
            <Th>Departamento</Th>
            <Th>Correo Electrónico</Th>
            <Th>Teléfono fijo</Th>
            <Th>Teléfono movil</Th>
          </tr>
        </Thead>

        <tbody>
          <Tr>
            <Td>1</Td>
            <Td>Vic Ferman</Td>
            <Td>Flores Escobar</Td>
            <Td>Miembro</Td>
            <Td>San Salvador</Td>
            <Td>vicflores2211@gmail.com</Td>
            <Td>87529632</Td>
            <Td>12789632</Td>
          </Tr>

          <Tr>
            <Td>2</Td>
            <Td>Fernando Josè</Td>
            <Td>Aguilar Rivas</Td>
            <Td>Miembro</Td>
            <Td>San Salvador</Td>
            <Td>fjrivas@gmail.com</Td>
            <Td>45879632</Td>
            <Td>54289674</Td>
          </Tr>

          <Tr>
            <Td>3</Td>
            <Td>Vic Ferman</Td>
            <Td>Flores Escobar</Td>
            <Td>Miembro</Td>
            <Td>San Salvador</Td>
            <Td>vicflores2211@gmail.com</Td>
            <Td>87529632</Td>
            <Td>12789632</Td>
          </Tr>

          <Tr>
            <Td>4</Td>
            <Td>Fernando Josè</Td>
            <Td>Aguilar Rivas</Td>
            <Td>Miembro</Td>
            <Td>San Salvador</Td>
            <Td>fjrivas@gmail.com</Td>
            <Td>45879632</Td>
            <Td>54289674</Td>
          </Tr>

          <Tr>
            <Td>5</Td>
            <Td>Vic Ferman</Td>
            <Td>Flores Escobar</Td>
            <Td>Miembro</Td>
            <Td>San Salvador</Td>
            <Td>vicflores2211@gmail.com</Td>
            <Td>87529632</Td>
            <Td>12789632</Td>
          </Tr>

          <Tr>
            <Td>6</Td>
            <Td>Fernando Josè</Td>
            <Td>Aguilar Rivas</Td>
            <Td>Miembro</Td>
            <Td>San Salvador</Td>
            <Td>fjrivas@gmail.com</Td>
            <Td>45879632</Td>
            <Td>54289674</Td>
          </Tr>
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Dashboard;
