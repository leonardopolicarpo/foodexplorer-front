import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 77px;
  padding: 24px 20px;
  width: 100%;
  gap: 10px;

  position: fixed;
  bottom: 0;
  text-align: center;

  font-family: Roboto, sans-serif;

  > p {
    color: ${({ theme }) => theme.colors.primary100};
    font-size: 12px;
  }

  @media (min-width: 540px) {
    padding: 24px 40px;
    > p {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    padding: 24px 80px;
  }
  `;

export const DivLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.gray700};
  font-size: 14px;
  font-weight: 700;

  > img {
    width: 22px;
    height: 18px;
  }

  @media (min-width: 540px) {
    font-size: 18px;

    > img {
    width: 30px;
    height: 30px;
  }
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;