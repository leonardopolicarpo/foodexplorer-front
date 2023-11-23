import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark100};
  display: inline-flex;
  padding-left: 50px;
  padding-right: 50px;
  flex-direction: column;
  align-items: flex-start;
  gap: 73px;

  @media (min-width: 960px) {
    flex-direction: row;
    align-items: center;
    gap: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  gap: 10px;
  margin-top: 100px;

  @media (min-width: 960px) {
    width: 50%;
    align-items: center;
    margin: 0 auto;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary100};
  font-family: Roboto, sans-serif;
  font-size: 38px;
  
  @media (min-width: 960px) {
    font-size: 42px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  #title-form {
    font-weight: 500;
    font-size: 32px;
    font-family: Poppins, sans-serif;
    display: none;
  }

  @media (min-width: 960px) {
    width: 476px;
    padding: 64px;

    #title-form {
      display: flex;
      justify-content: center;
    }
  }
`;

export const DivText = styled.div`
  text-align: center;
`;

export const TextCreate = styled.p`
  color: ${({ theme }) => theme.colors.primary100};
  text-align: center;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
`;