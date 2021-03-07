import styled from 'styled-components';

export const TableContainer = styled.section`
  text-align: center;
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 940px) {
    overflow: scroll;
    display: block;
  }
`;

export const Thead = styled.thead`
  background: #a7c5eb;
  color: #272343;
`;

export const Tr = styled.tr`
  :hover {
    background: #cfdac8;
  }
`;

export const Th = styled.th`
  padding: 10px;
`;

export const Td = styled.td`
  padding: 18px;
`;
