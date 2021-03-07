import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #dddddd;
  padding: 23px;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  margin: 0 5px 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 15px;
    font-size: 15px;

    :last-of-type {
      padding-bottom: 0;
    }
  }
`;
