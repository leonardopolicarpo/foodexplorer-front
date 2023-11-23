import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.color};
  color: ${({ theme }) => theme.colors.primary100};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  border: none;
  border-radius: 5px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;
  font-family: Poppins, sans-serif;

  &:hover {
    background: ${(props) => props.colorhover};
  }
`;