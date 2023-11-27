import styled from "styled-components";

export const Container = styled.section`
  
  > h2 {
    color: ${({ theme }) => theme.colors.primary300};
    font-size: 18px;
    font-weight: 500;
    font-family: Poppins, sans-serif;
  }
`;