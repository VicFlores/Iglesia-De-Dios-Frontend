import styled from 'styled-components';

//* Title

export const Title = styled.h1`
  color: black;
  font-size: 30px;
  text-align: center;
  background-color: rgba(148, 235, 205, 0.4);
  padding: 10px;
  margin: 0;
`;

//* Container
export const LoginContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(156, 155, 160);
  background: linear-gradient(
    180deg,
    rgba(156, 155, 160, 1) 0%,
    rgba(58, 57, 63, 1) 100%
  );
`;

//* Form imagine styles

export const Figure = styled.figure`
  margin: 0 30px 0 0;
  text-align: center;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 200px;
`;

//* Form styles

export const LoginForm = styled.form`
  padding: 16px 12px;
  border-radius: 20px;
  color: white;
`;

export const Item = styled.div`
  margin: 45px 0;
`;

export const Label = styled.label`
  font-size: 15px;
  padding-bottom: 15px;
  margin: 0;
`;

export const Input = styled.input`
  border-bottom: 1px solid #b8b5ff;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding: 8px 4px;
  width: 100%;
  outline-style: none;
  overflow: hidden;
  background: transparent;
  color: #e7dfd5;

  ::placeholder {
    color: #cdd0cb;
  }
`;

//* Button Styles

export const Button = styled.button`
  background-color: rgba(84, 227, 70, 0.6);
  border-radius: 3px;
  color: #fff;
  height: 35px;
  width: 100%;
  border-style: none;
`;
