import styled from "styled-components";

export const Container = styled.div``;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary400};
  font-family: Roboto;
  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  margin-top: 8px;
  padding: 12px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  align-self: stretch;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.dark900};

  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary100};
  ::placeholder {
    color: ${({ theme}) => theme.colors.gray500};
  }
`;