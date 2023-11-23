import { styled } from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 114px;
  display: flex;
  gap: 16px;
  padding: 56px 28px 24px;
  justify-content: space-between;

  &#menu {
    justify-content: left;
  }

  > a {
    padding: 5px 0;
  }

  @media (min-width: 960px) {
    align-items: flex-start;
    gap: 32px;
    padding-left: 5%;
    padding-right: 5%;

    #link-menu,
    #receipt > a > img {
      display: none;
    }
  }

  @media (max-width: 960px) {
    #signOut,
    #receipt button,
    #signOut {
      display: none;
    }
  }
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  /* border: 1px solid white; */
  position: relative;

  @media (min-width: 960px) {
    > p {
      position: absolute;
      margin-top: 2px;
      bottom: 0;
      right: 0px;
    }
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary100};
  font-family: Roboto, sans-serif;
  font-size: 20px;

  &#menuTitle {
    font-weight: 400;
  }
  
  @media (min-width: 960px) {
    font-size: 24px;
  }
`;

export const Admin = styled.p`
  color: ${({ theme }) => theme.colors.cake200};
  font-family: Roboto;
  font-size: 12px;

  @media (min-width: 960px) {
    /* border: 1px solid white; */

  }
`;

export const Aside = styled.aside`
  width: 100%;
  height: calc(100vh - 114px - 77px);
  z-index: 0;
  background: ${({ theme }) => theme.colors.dark100};
  transition: translate 200ms ease-in-out;
  padding: 36px 28px 0;
`;

export const DivSearch = styled.div`
  display: flex;
  height: 48px;
  padding: 12px 14px;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-shrink: 0;
  align-self: stretch;
  margin-bottom: 36px;

  border-radius: 5px;
  background: ${({ theme }) => theme.colors.dark900};

  &.searchHeader {
    display: none;
  }

  @media (min-width: 960px) {
    /* border: 1px solid white; */
    margin: 0;
    max-width: 1090px;
    width: 50%;
    &.searchHeader {
    display: flex;
  }
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.primary100};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
`;

export const DivLinks = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    padding: 10px 0;
    color: ${({ theme }) => theme.colors.primary300};
    font-family: Poppins;
    font-size: 24px;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    
  }
`;