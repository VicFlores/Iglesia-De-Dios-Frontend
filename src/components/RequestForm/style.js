import styled from 'styled-components';

//* Title

export const Title = styled.h1`
  color: black;
  font-size: 30px;
  text-align: center;
  margin: 30px 0;
  background-color: rgba(40, 171, 185, 0.5);
  padding: 10px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

//* Form container

export const FormContainer = styled.form`
  padding: 16px 12px;
  background-color: rgba(227, 246, 245, 0.4);
  border-radius: 20px;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
  }
`;

//* Fields items

export const Item = styled.div`
  margin: 25px 0;
`;

export const Label = styled.label`
  font-size: 15px;
  padding-bottom: 15px;
  margin: 0;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 4px;
  width: 100%;
  outline-style: none;
  overflow: hidden;
`;

export const Select = styled.select`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px 4px;
  width: 100%;
  outline-style: none;
  overflow: hidden;
`;

export const SelectOptions = styled.option``;

export const ButtonContainer = styled.div`
  margin: 60px 0 0;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: rgba(46, 139, 192, 0.9);
  color: #f9fcfb;
  border-radius: 3px;
  height: 38px;
  width: 300px;
  border-style: none;
`;
