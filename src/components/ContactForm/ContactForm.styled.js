import styled from "styled-components";
import { Form, Field } from 'formik';

export const MyForm = styled(Form)`
  border: 2px solid #000000;
  margin-top: 12px;
  padding: 12px;
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;

  & + & {
    margin-top: 12px;
  }
`;

export const Input = styled(Field)`
  display: block;
  margin-top: 4px;
`;

export const Button = styled.button`
  margin-top: 12px;
  border-radius: 5px;
  cursor: pointer;
`;