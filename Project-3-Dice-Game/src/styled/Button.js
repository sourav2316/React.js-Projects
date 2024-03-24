import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: black;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;
  border: 2px solid transparent;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

export const Outline = styled(Button)`
  background-color: white;
  border: 2px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 2px solid transparent;
    color: white;
  }
`;
