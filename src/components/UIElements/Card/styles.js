import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 210px;
  height: 292px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;

  border-radius: 8px;
  border: ${({ theme }) => theme.colors.dark300};
  background: ${({ theme }) => theme.colors.dark200};

  @media (min-width: 768px) {
    width: 304px;
    height: 462px
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary300};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;

  &#price {
    color: ${({ theme }) => theme.colors.cake200};
  }

  @media (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
  }
`;

export const Logo = styled.img`
  width: 88px;
  height: 88px;
`;

export const Icons = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  &#like {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }
`;

export const DivQuantity = styled.div`
  display: flex;
  padding: 4px 0px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  color: ${({ theme }) => theme.colors.primary300};
  
  button {
    background: none;
    border: none;
  }

  p {
    font-size: 16px;
    font-family: Roboto;
  }
`;

export const Description = styled.p`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
    color: ${({ theme }) => theme.colors.primary400};
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    line-height: 160%; 
  }
`;