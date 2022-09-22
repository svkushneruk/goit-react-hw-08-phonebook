import styled from 'styled-components';

export const Form = styled.form`
  font-size: 16px;
`;

export const FormLabel = styled.label`
  padding: 10px;
  font-size: 18px;
`;

export const FormInput = styled.input`
  padding: 10px;
`;

export const FormBtn = styled.button`
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  text-align: center;
  border: 1px solid black;
  &:hover,
  &:focus {
    background: transparent;
  }
`;
