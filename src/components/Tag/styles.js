import styled from "styled-components";

export const Container = styled.span`
  color: ${({ theme }) => theme.colors.primary100};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  padding: 4px 8px;

  border-radius: 5px;
  background: ${({ theme }) => theme.colors.dark1000};
`;