import styled from "styled-components";

export const Contacts = styled.ul`
  margin-top: 12px;
  padding-left: 12px;
`;

export const ContactItem = styled.li`
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