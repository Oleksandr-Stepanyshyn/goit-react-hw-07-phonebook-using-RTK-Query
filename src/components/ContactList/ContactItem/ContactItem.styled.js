import styled from "styled-components";

export const Contact = styled.li`
  display: flex;
  font-weight: 600;
  width: 100%;

  & + & {
    margin-top: 8px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  margin-left: auto;
  border-radius: 5px;
  cursor: pointer;
`;